'use strict';

const express = require('express');

// Constants
const PORT = 8009;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Test Response From My awsEC2app2 EC2 Instance');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
