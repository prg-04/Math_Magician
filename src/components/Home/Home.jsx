import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home__hero">
    <div className="home__hero-intro">
      <h2>Welcome to Math Magician!</h2>
      <p>
        Math Magician is a website that offers a variety of mathematical tools
        and resources. Whether you need to perform basic calculations or find
        inspiration through insightful quotes, Math Magician has got you
        covered.
      </p>
    </div>

    <div className="home__hero-calc">
      <h2>Calculator</h2>
      <p>
        Visit the Calculator page to perform basic arithmetic calculations
        quickly and easily. It provides a user-friendly interface for addition,
        subtraction, multiplication, and division operations.
      </p>
      <Link to="/calculator" className="cta-button">
        Go to Calculator
      </Link>
    </div>

    <div className="home__hero-quote">
      <h2>Quote of the Day</h2>
      <p>
        Discover a new quote every day to inspire your mathematical journey. Our
        curated collection of quotes from mathematicians, scientists, and
        philosophers will keep you motivated.
      </p>
      <Link to="/quotes" className="cta-button">
        See Quote of the Day
      </Link>
    </div>
  </div>
);

export default Home;
