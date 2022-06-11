import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CryptoCard = (currency) => {
    return (
        <Card sm={2} md={3} className="rankCardStyle">
            <Link key={currency.uuid} to={`/crypt/${currency.uuid}`}>
                <Card.Title>{`${currency.rank}. ${currency.name}`}</Card.Title>
                <Card.Body>
                    <p>Price: {currency.price}</p>
                    <p>Market Cap: {currency.marketCap}</p>
                    <p>Daily Change: {currency.change}%</p>
                </Card.Body>
            </Link>            
        </Card>
    )
}

export default CryptoCard;
