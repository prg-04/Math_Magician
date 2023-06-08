import React, { useEffect, useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

useEffect(() => {
  const fetchQuote = async () => {
    const URL = 'https://api.quotable.io/random';
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  fetchQuote();
}, [setHasError, setIsLoading]);
  
  
  if (isLoading) return <div>Loading...</div>;

  if (hasError) return <div>Error occurred while fetching the quote.</div>;

  return (
    <div className="quotes">
      <h1>Today&apos;s Quote</h1>
      <p>
        &quot;
        {quote}
        &quot;
      </p>
    </div>
  );
}

export default Quotes;
