import PropTypes from 'prop-types';

function Quotes({ quote, isLoading, hasError }) {
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

Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Quotes;
