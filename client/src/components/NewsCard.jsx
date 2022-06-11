import { Container, Col, Card, Row } from 'react-bootstrap';

const NewsCard = ({news}) => {
    return (
        <Col sm="6" md="4">
            <div>
                <Card style={{backgroundColor:"black", color:"white",margin:"20px", padding:"20px", height:"350px"}}>
                        <Card.Title>
                            <Container>
                                <Row>
                                    <Col sm="6">
                                        {news.name}
                                    </Col>
                                    <Col sm="6">
                                        <img src={news?.image?.thumbnail?.contentUrl} />
                                    </Col>
                                </Row>
                            </Container>                            
                        </Card.Title>
                        <Card.Body>
                            <p>
                                {news.description.length>50 ? `${news.description.substring(0,50)} . . . . `: news.description}
                                <a style={{textDecoration:"none"}} href={news.url} target="_blank" rel="noreferrer">  Read More</a>
                            </p>
                            <div>
                                <img style={{padding:"20px", height:"100px"}} src={news.provider[0]?.image?.thumbnail?.contentUrl} />
                                {news.provider[0]?.name}
                            </div>
                        </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default NewsCard;
