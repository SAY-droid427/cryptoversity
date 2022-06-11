import RankingCard from './RankingCard';
import{ Container } from 'react-bootstrap';
const CryptoRankings = () => {
    return (
        <Container fluid>
            <h2>Current Rankings and Global Statistics</h2>
            <RankingCard />
            <RankingCard />
        </Container>
    )
}

export default CryptoRankings;
