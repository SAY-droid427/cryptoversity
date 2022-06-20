import React from 'react';
import useFetch from '../hooks/useFetch';

import { Card, Col } from 'react-bootstrap';
import '../index.css';

import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {
    const gifUrl = useFetch({keyword});

    return (
            <Col sm="6" md="4">
                <div>
                    <Card className="deck-style" style={{backgroundColor:"black"}}>
                        <Card.Body>
                            <p>From : {shortenAddress(addressTo)}</p>
                            <p>To : {shortenAddress(addressFrom)}</p>
                            <p>Amount : {amount} </p>
                            {message && (
                                <>
                                <br />
                                <p>Message: {message}</p>
                                </>
                            )}
                            <img src={gifUrl || url} alt="nature" className="gif-style" />
                            <div className="time-style">
                                <p>{timestamp}</p>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </div>                
            </Col>        
        
    )
}


export default TransactionCard;
