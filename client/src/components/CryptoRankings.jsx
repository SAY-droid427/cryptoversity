import { useState, useEffect } from 'react';
import CryptoCard from './CryptoCard';
import{ Container, Form, FormControl, Button } from 'react-bootstrap';
import { useGetCoinsQuery } from '../services/cryptoDataAPI';

const CryptoRankings = () => {

    const count = 50;
    const { data: cryptoList, isFetching } = useGetCoinsQuery(count);
    const [ cryptos, setCryptos ] = useState(cryptoList?.data?.coins);
    const [ searchCoin, setSearchCoin ] = useState("");

    console.log(cryptos);

    useEffect(() => {
        if(!isFetching){
            setCryptos(cryptoList?.data?.coins);
        }
        const filterData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchCoin));
        setCryptos(filterData);
    },[ cryptoList, searchCoin, isFetching]);

    const searchCoinsFunc = (e) =>{
        e.preventDefault();
        console.log("Clicked");
        setSearchCoin(e.target.value);
    }
    return (
        <>
            <Container fluid className="rank-header-style">
                <h2>Current Rankings and Global Statistics</h2>                
                <div className="search-style">
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search Coin" className="me-2" aria-label="Search"  />
                        <Button variant="dark" onClick={ searchCoinsFunc }>Search</Button>
                    </Form>
                </div>
            </Container>        

            <Container>
                {cryptos?.map((currency) => (
                    <CryptoCard key={currency.uuid} crypto = {currency} />
                ))}
            </Container>
        </>
    )
}

export default CryptoRankings;
