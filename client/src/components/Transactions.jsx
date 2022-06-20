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
        <Container fluid className="transaction-style">
            {connectedAccount ? (
                <Row className="transaction-header-style">
                    <h3>Latest Transactions</h3>
                </Row>
            ):
            (
                <Row className="transaction-header-style">
                    <h3>Connect your account</h3>
                </Row>
                
            )}
            <div className="transaction-card-style">
                {[...dummyData, ...transactions].reverse().map((transaction, i) => (
                    <TransactionCard key={i} {...transaction} />
                ))}
            </div>
        </Container>
        
    )
}

export default Transactions;
