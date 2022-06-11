import { Card } from 'react-bootstrap';

const RankingCard = () => {
    return (
        <Card sm={2} md={3} className="rankCardStyle">
            <Card.Title>Card1</Card.Title>
            <Card.Body>This is the content</Card.Body>
        </Card>
    )
}

export default RankingCard;
