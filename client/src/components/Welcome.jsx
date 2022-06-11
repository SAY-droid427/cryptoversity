import {Container, Card, Row, Col} from 'react-bootstrap';

const Welcome = () => {
    return (
        <Container fluid className="welcome-style">
            <h2>Welcome to Cryptoversity</h2>
            <br />
            <h4>A website for everything crypto......everything</h4>
            <Container className="service-style">
                <h3>Services</h3>
            </Container>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Card className="deckStyle" style={{backgroundColor:"black"}}>
                            <Card.Title>Send Ethereum</Card.Title>
                            <Card.Body>Its simple and easy! Connect your wallet and send ethereum!</Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card className="deckStyle" style={{backgroundColor:"black"}}>
                            <Card.Title>View Transactions</Card.Title>
                            <Card.Body>Made some transactions? View them in a click.</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Card className="deckStyle" style={{backgroundColor:"black"}}>
                            <Card.Title>Current Rankings</Card.Title>
                            <Card.Body>View global stats and current rankings of coins.</Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card className="deckStyle" style={{backgroundColor:"black"}}>
                            <Card.Title>News</Card.Title>
                            <Card.Body>Stay updated with all the happenings in the fast-paced crypto world!</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Welcome;
