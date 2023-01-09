const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/search", (req, res) => {
  const jsonData= require('./data.json'); 
  res.send(jsonData);
})