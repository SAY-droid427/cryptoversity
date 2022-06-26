import React from 'react';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log("GetEthereumContract");
    console.log(transactionContract);
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {

    const [connectedAccount, setConnectedAccount] = useState("");
    const [formData, setFormData] = useState({addressTo: "", amount:"", keyword:"", message:""});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, settransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);
    
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const getAllTransactions = async() => {
        try {
            if(ethereum) {
                const transactionsContract = getEthereumContract();
                console.log("transactionsContract");
                console.log(transactionsContract);
                const availableTransactions = await transactionsContract.getAllTransactions();
                console.log("Available transactions ");
                console.log(availableTransactions);
                const structuredTransactions = availableTransactions.map((transaction) => ({
                    addressTo: transaction.receiver,
                    addressFrom : transaction.sender,
                    timestamp: new Date(transaction.timestamp.toNumber()*1000).toLocaleString(),
                    message: transaction.message,
                    keyword: transaction.keyword,
                    amount: parseInt(transaction.amount._hex)/(10 ** 18)
                }));
                console.log("Structured Transactions:");
                console.log(structuredTransactions);

                setTransactions(structuredTransactions);
            }else{
                console.log("Ethereum is not present");
            }
        } catch(error){
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async() => { 
        try{
            if(!ethereum) return alert("Please install metamask");

            const accounts =  await ethereum.request({method: 'eth_accounts'});
            if(accounts.length){
                setConnectedAccount(accounts[0]);
                getAllTransactions(); 
                console.log("Accounts found");  
                console.log(accounts); 
            } else {
                console.log("No accounts found");
            }
        } catch(error) {
            console.log(error);
            throw new Error("No ethereum object");
        }  
    };

    const checkIfTransactionExists = async () => {
        try{
            if(ethereum) {
                const transactionContract = getEthereumContract();
                const currentTransactionCount = await transactionContract.getTransactionCount();

                window.localStorage.setItem("transactionCount", currentTransactionCount);
            }
        } catch(error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }
    
    const connectWallet = async() => {
        try{
            if(!ethereum)
            return alert("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_requestAccounts' });

            setConnectedAccount(accounts[0]);
            console.log("Connected account: "+connectedAccount);
            window.location.reload();
        }
        catch(error){
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    const sendTransaction = async() => {
        try{
            if(ethereum){
                const { addressTo, amount, keyword, message } = formData;
                const transactionContract = getEthereumContract();
                const parsedAmount = ethers.utils.parseEther(amount);
    
                await ethereum.request({
                    method: 'eth_sendTransaction',
                    params:[
                        {
                            from: connectedAccount,
                            to: addressTo,
                            gas:'0x5208',
                            value:parsedAmount._hex,
                        }
                    ]
                });
                const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
                setIsLoading(true);
                console.log(`Loading - ${transactionHash.hash}`);
                await transactionHash.wait();
                console.log("Transaction send");
                setIsLoading(false);
                console.log(`Success - ${transactionHash.hash}`);
    
                transactionCount = await transactionContract.getTransactionCount();
                settransactionCount(transactionCount.toNumber());
                window.location.reload();
            }

        }catch(error){
            console.log(error);
            throw new Error("No ethereum object")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionExists();

    }, [transactionCount]);

    return (
        <TransactionContext.Provider value={{ transactionCount, connectWallet, transactions, connectedAccount, isLoading, formData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}
