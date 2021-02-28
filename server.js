const config = require('config-yml');
const cors = require('cors');
const express = require('express');

const GameServer = require('./gameserver');

const { name, version } = require('./package.json');

const { PORT = 5000 } = process.env;

const app = express();

console.log('yml config:', config);

app.use(cors());

app.get('/status', (req, res) => {
  res.json({ name, version });
});

app.get('/servers', async (req, res) => {
  const result = await GameServer.getAllServers();
  res.json(result);
});

app.listen(PORT, () => {
  console.info('Listening on port=%s', PORT);
});
