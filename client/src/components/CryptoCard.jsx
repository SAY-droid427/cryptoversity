import { Card, Col } from 'react-bootstrap';
import millify from 'millify';

import '../index.css';

const CryptoCard = ({currency}) => {
    return (
        <Col sm="4" md="3">
             <Card  style={{backgroundColor:"black", color:"white", margin:"20px", padding:"20px", height:"300px"}} >                
                 <Card.Title>
                     {`${currency.rank}. ${currency.name}`}
                     <img className="crypto-image" src={currency.iconUrl} />
                 </Card.Title>
                 <Card.Body>
                     <p>Price: {millify(currency.price)}</p>
                     <p>Market Cap: {millify(currency.marketCap)}</p>
                     <p>Daily Change: {currency.change}%</p>
                 </Card.Body>                           
             </Card>
        </Col>
        
    )
}

export default CryptoCard;
