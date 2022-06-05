import 'bootstrap/dist/css/bootstrap.css';
import { SiEthereum } from 'react-icons/si';
import { Container, Row, Card, Form } from 'react-bootstrap';
import { Loader } from './';
import '../index.css'

const Welcome = () => {

    const connectWallets = () => {
        console.log("Clicked");

    }

    const handleChange = () => {
        console.log("Handled")
    }
    return (
        <Container fluid className="welcomeStyle">
            <Row className="justify-content-md-center m-auto">
               <div className="welcome-section">
                   Everything Crypto
               </div>               
            </Row>
            <Row className="justify-content-md-center m-auto">
                <div className="intro-section">
                    Explore the world of crypto. Buy and sell cryptocurrencies, read news on crypto and everything related to crypto.
                </div>
            </Row>
            <Row className="justify-content-md-center m-auto buttonRowStyle">
            <button type="button" className="buttonStyle" onClick={connectWallets}>Connect wallet</button>
            </Row> 
            <Row className="justify-content-md-center m-auto" >
                <Card style={{backgroundColor:"transparent", outline:"none",width:"25rem", border:"none"}}>
                    <div>
                    <Card.Body className="cardStyle">
                        <Card.Title>
                            <SiEthereum fontSize={21} color="#fff" />
                        </Card.Title>
                        <Card.Text style={{marginTop:"10px"}}>
                        <p>Address</p>
                        <h2>Ethereum</h2>
                        </Card.Text> 
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Address To" name="addressTo" handleChange={handleChange} className="formStyle" />
                                <Form.Control type="number" placeholder="Amount(ETH)" name="amount" handleChange={handleChange} className="formStyle" />
                                <Form.Control type="text" placeholder="Enter Message" name="message" handleChange={handleChange} className="formStyle" />
                                <Form.Control type="text" placeholder="Keyword (Gif)" name="keyword" handleChange={handleChange} className="formStyle" />
                            </Form.Group>
                        </Form>
                        {false? <Loader />: (
                            <button type="button" onClick="handleSubmit" className="submitStyle">Send Now</button>
                        )}
                    </Card.Body>
                    </div>                                           
                </Card>
            </Row>
                     
        </Container>
    )
}

export default Welcome;
