const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3')
const app = express();
const path = require('path');
const port = 3000;

const db = new sqlite3.Database('./data.sqlite3')

app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/search", (req, res) => {
  db.serialize(()=>{
    db.all("select * from animation_info",(err,rows)=>{
      res.send(rows);
    })
  });
  
  // const jsonData= require('./data.json'); 
  // res.send(jsonData);
})

app.get("/search:id", (req, res) => {
  const jsonData= require('./data.json');
  let param = Number(req.params.id);
  res.send(jsonData);
  z
})

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/react-project/build/index.html'));
// });
