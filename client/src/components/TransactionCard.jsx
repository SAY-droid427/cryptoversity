import React from 'react';
import { Card, Col} from 'react-bootstrap';
import '../index.css';

import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {
   console.log(addressTo);
    return (
            <Col sm="6" md="4">
                <div>
                    <Card className="deckStyle"  style={{backgroundColor:"rgba(0,0,0)"}}>
                        <Card.Body>
                            <p>From : {shortenAddress(addressTo)}</p>
                            <p>To : {shortenAddress(addressFrom)}</p>
                            <p>Amount : {amount} </p>
                        </Card.Body>
                    </Card>
                </div>
                
            </Col>        
        
    )
}


export default TransactionCard;
