import React from 'react';
import { useContext } from 'react';
import '../index.css';

import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { Container, Row } from 'react-bootstrap';
import TransactionCard from './TransactionCard';

const Transactions = () => {

    const { transactions, connectedAccount } = useContext(TransactionContext);

    return (
        <Container fluid className="transactionStyle">
            {connectedAccount ? (
                <Row>
                    <h3>Latest Transactions</h3>
                </Row>
            ):
            (
                <Row>
                    <div>Connect your account</div>
                </Row>
                
            )}
            <div className="transactionCardStyle">
                {[...dummyData, ...transactions].reverse().map((transaction, i) => (
                    <TransactionCard key={i} {...transaction} />
                ))}
            </div>
        </Container>
        
    )
}

export default Transactions;
