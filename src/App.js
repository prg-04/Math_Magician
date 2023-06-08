import './App.css';
import Calculator from './components/Calculator/Calculator';
import Navbar from './components/Navbar/Navbar';
import Quotes from './components/Quotes/Quotes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Quotes />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
