import { Container } from "react-bootstrap";

const Footer = () => {
    return(
        <Container fluid className="footerStyle">
            Made with ♥ by Sayani Mallick
            <br></br>
            © {new Date().getYear()+1900}
        </Container>
    )
}
export default Footer;
