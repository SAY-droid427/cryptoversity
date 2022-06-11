import React from 'react';
import { useState } from 'react';

import { useGetCoinsQuery } from '../services/cryptoDataAPI';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

import { Container} from 'react-bootstrap';

const News = () => {

    const [ newsCategory, setNewsCategory ] = useState('Cryptocurrency');
    const { data }= useGetCoinsQuery(50);

    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count: 10});
    console.log(cryptoNews);

    return (
        <>
            <Container fluid className="rank-header-style">
                <h2>News</h2>
                <input type="text" className="searchCryptoStyle" placeholder="Search Cryptocurrency" onChange={(e) => setNewsCategory(e.target.value.toLowerCase())}></input>
            </Container>
            
        </>
    )
}

export default News;
