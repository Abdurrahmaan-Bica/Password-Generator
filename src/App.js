import logo from './logo.svg';
import './App.css';
import RandomPasswordGenerator from './components/RandomPasswordGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <RandomPasswordGenerator/>
      </header>
      
    </div>
  );
}

export default App;
