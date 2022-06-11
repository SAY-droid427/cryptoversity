import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Welcome, NavBar, HomePage, Footer, Transactions, News, CryptoRankings } from './components';

const App = () => {
  return (
    <BrowserRouter>
       <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/rankings" element={<CryptoRankings />} />
          <Route path="/news"  element={<News />} />
         </Routes> 
         <Footer />   
      </div>
    </BrowserRouter>
   
  )
}

export default App;
