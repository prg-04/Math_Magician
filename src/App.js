import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Navbar from './components/Navbar/Navbar';
import Quotes from './components/Quotes/Quotes';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      const URL = 'https://api.api-ninjas.com/v1/quotes?category=intelligence';
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await fetch(URL, {
          headers: {
            'X-Api-Key': 'fAPtdgymqgyTlllzbvBkHw==xh7QTqNdg39f8ojz',
          },
        });
        const data = await response.json();
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote.quote);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route
          path="/quotes"
          element={
            <Quotes quote={quote} isLoading={isLoading} hasError={hasError} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
