import { useState } from 'react';
import { NavBar, Welcome, Footer, Transactions, News } from './components';
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Transactions />
      <News />
      <Footer />
    </div>
  )
}

export default App;
