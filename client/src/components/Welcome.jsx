import 'bootstrap/dist/css/bootstrap.css';

import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Container, Row } from 'react-bootstrap';
import { Loader } from './';
import '../index.css'

const Welcome = () => {

    const connectWallets = () => {
        
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

            
        </Container>
    )
}

export default Welcome;
