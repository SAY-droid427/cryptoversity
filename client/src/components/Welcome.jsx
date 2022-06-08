import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useContext } from 'react';
import { SiEthereum } from 'react-icons/si';
import { Container, Row, Card, Form } from 'react-bootstrap';
import { Loader } from './';
import '../index.css'
import { TransactionContext } from '../context/TransactionContext';
import {shortenAddress} from '../utils/shortenAddress';

const Welcome = () => {

    const {  connectWallet, connectedAccount, formData, handleChange, sendTransaction } = useContext(TransactionContext);
    
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message }=formData;
        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message )
        return;

        sendTransaction();
    }

    return (
        <Container fluid className="welcomeStyle">
            <Row className="justify-content-md-center m-auto">
               <div className="welcome-section">
                   Everything Crypto
               </div>               
            </Row>
            <Row className="justify-content-md-center m-auto">
                <div className="intro-section">
                    Explore the world of crypto. Buy and sell cryptocurrencies, read news on crypto and everything related to crypto.
                </div>
            </Row>
            <Row className="justify-content-md-center m-auto buttonRowStyle">
            {!connectedAccount && (
            <button type="button" className="buttonStyle" onClick={connectWallet}>
                Connect wallet
            </button>)}
            </Row> 
            <Row className="justify-content-md-center m-auto" >
                <Card style={{backgroundColor:"transparent", outline:"none",width:"25rem", border:"none"}}>
                    <div>
                    <Card.Body className="cardStyle">
                        <Card.Title>
                            <SiEthereum fontSize={21} color="#fff" />
                        </Card.Title>
                        <Card.Text style={{marginTop:"10px"}}>
                        <div>{shortenAddress(connectedAccount)}</div>
                        <div>Ethereum</div>
                        </Card.Text> 
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Address To" name="addressTo" onChange={handleChange} className="formStyle" />
                                <Form.Control type="number" placeholder="Amount(ETH)" name="amount" onChange={handleChange} className="formStyle" />
                                <Form.Control type="text" placeholder="Enter Message" name="message" onChange={handleChange} className="formStyle" />
                                <Form.Control type="text" placeholder="Keyword (Gif)" name="keyword" onChange={handleChange} className="formStyle" />
                            </Form.Group>
                        </Form>
                        {false? <Loader />: (
                            <button type="button" onClick={handleSubmit} className="submitStyle">Send Now</button>
                        )}
                    </Card.Body>
                    </div>                                           
                </Card>
            </Row>
                     
        </Container>
    )
}

export default Welcome;
