import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To Medusa. We believe we will be able to make an awesome app by coding it from scratch. Yes, learning everything in a week and launching the best token ever.
        </p>
        <a
          className="App-link"
          href="https://t.me/medusalabs"
          target="_blank"
          rel="noopener noreferrer"
        >
        Join our Telegram here
        </a>
      </header>
    </div>
  );
}

export default App;
