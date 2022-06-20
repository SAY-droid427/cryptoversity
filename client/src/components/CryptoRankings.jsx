import { useState, useEffect } from 'react';
import CryptoCard from './CryptoCard';
import{ Container } from 'react-bootstrap';
import { useGetCoinsQuery } from '../services/cryptoDataAPI';

const CryptoRankings = () => {

    const count = 50;
    const { data: cryptoList, isFetching } = useGetCoinsQuery(count);
    const [ cryptos, setCryptos ] = useState(cryptoList?.data?.coins);
    const [ searchCoin, setSearchCoin ] = useState("");

    console.log(cryptoList?.data?.coins);

    useEffect(() => {
        if(!isFetching){
            setCryptos(cryptoList?.data?.coins);
        }
        const filterData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchCoin));
        setCryptos(filterData);
    },[ cryptoList, searchCoin, isFetching]);

    return (
        <>
            <Container fluid className="rank-header-style">
                <h2>Current Rankings and Global Statistics</h2>                
                <input type="text" className="search-crypto-style" placeholder="Search Cryptocurrency" onChange={(e) => setSearchCoin(e.target.value.toLowerCase())}></input>
            </Container>        

            <div className="crypto-deck-style">
                {cryptos?.map((currency) => (
                    <CryptoCard key={currency.uuid} currency={currency} />
                ))}
            </div>
        </>
    )
}

export default CryptoRankings;
