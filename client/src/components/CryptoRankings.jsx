import { useState, useEffect } from 'react';
import CryptoCard from './CryptoCard';
import{ Container, Form, FormControl, Button } from 'react-bootstrap';
import { useGetCoinsQuery } from '../services/cryptoDataAPI';

const CryptoRankings = () => {

    const count = 100;
    const { data: cryptoList, isFetching } = useGetCoinsQuery(count);
    const [ cryptos, setCryptos ] = useState(cryptoList?.data?.coins);
    const [ searchCoin, setSearchCoin ] = useState("");

    console.log(cryptos);

    useEffect(() => {
        setCryptos(cryptoList?.data?.coins);
        const filterData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchCoin));

        setCryptos(filterData);
    },[ cryptoList, searchCoin]);


    return (
        <>
            <Container fluid className="rank-header-style">
                <h2>Current Rankings and Global Statistics</h2>
                
                <div className="search-style">
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search Coin" className="me-2" aria-label="Search" onChange={(e) => setSearchCoin(e.target.value.toLowerCase())} />
                        <Button variant="dark">Search</Button>
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
