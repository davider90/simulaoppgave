import logo from './logo icon blaa.png';
import './App.css';
import DataList from './DataList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } alt="Disputaslogo" className="App-logo" />
        Disputas
      </header>
      <div className="App-content">
        <DataList />
      </div>
    </div>
  );
}

export default App;
