import React from 'react';
import { useState } from 'react';

import NewsCard from './NewsCard';

import { useGetCoinsQuery } from '../services/cryptoDataAPI';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

import { Container} from 'react-bootstrap';

const News = () => {
    const [ newsCategory, setNewsCategory ] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count: 12});

    return (
        <>
            <Container fluid className="rank-header-style">
                <h2>News</h2>
                <input type="text" className="searchCryptoStyle" placeholder="Search Cryptocurrency" onChange={(e) => setNewsCategory(e.target.value.toLowerCase())}></input>
            </Container>
            <div className="cryptoDeckStyle">
                {cryptoNews?.value.map((news, index)=> (
                    <NewsCard key={index} news={news} />
                ))}
            </div>
            
        </>
    )
}

export default News;
