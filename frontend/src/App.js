import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ServerCard from './ServerCard';

const {
  REACT_APP_API_BASE_URL,
} = process.env;

function App() {
  const [appName, setAppName] = useState('');
  const [appVersion, setAppVersion] = useState('');
  const [serverList, setServerList] = useState({});

  useEffect(() => {
    fetch(`${REACT_APP_API_BASE_URL}/status`).then(async (response) => {
      const { name, version } = await response.json();
      setAppName(name);
      setAppVersion(version);
    });
  }, []);
  
  useEffect(() => {
    fetch(`${REACT_APP_API_BASE_URL}/servers`).then(async (response) => {
      const servers = await response.json();
      setServerList(servers);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-img" alt="Icon made by srip https://www.flaticon.com/authors/srip from https://www.flaticon.com/" />
        <h1>Bjortfall Server Details</h1>
      </header>
      <div className="App-content">
        {Object.keys(serverList).map(serverId => <ServerCard key={serverId} serverType={serverId} server={serverList[serverId]} />)}
      </div>
      <footer className="App-footer">
        {appName}@{appVersion}
      </footer>
    </div>
  );
}

export default App;
