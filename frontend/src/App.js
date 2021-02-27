import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const {
  REACT_APP_API_BASE_URL,
} = process.env;

function App() {
  const [appName, setAppName] = useState('');
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    fetch(`${REACT_APP_API_BASE_URL}/status`).then(async (response) => {
      const { name, version } = await response.json();
      setAppName(name);
      setAppVersion(version);
    });
  }, []);

  return (
    <div className="App">
      <div className="App-logo">
        <img src={logo} className="App-logo-img" alt="Icon made by srip https://www.flaticon.com/authors/srip from https://www.flaticon.com/" />
      </div>
      <header className="App-header">
        <h1>Bjortfall Server Details</h1>
      </header>
      <div className="App-content">
      </div>
      <footer className="App-footer">
        {appName}@{appVersion}
      </footer>
    </div>
  );
}

export default App;
