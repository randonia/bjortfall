const express = require('express');
const cors = require('cors');

const { name, version } = require('./package.json');

const { PORT = 5000 } = process.env;

const app = express();

app.use(cors());

app.get('/status', (req, res) => {
  res.json({ name, version });
});

app.listen(PORT, () => {
  console.info('Listening on port=%s', PORT);
});
