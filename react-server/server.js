const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3')
const app = express();
const path = require('path');
const port = 3000;

const db = new sqlite3.Database('./data.sqlite3')
let count = 1;

app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
  console.log("index.html 페이지 전송")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/search", (req, res) => {
  db.serialize(()=>{
    db.all(`select * from animation_info limit ${(count-1)*8} ,8`,(err,rows)=>{
      count=+1;
      res.send(rows);
      console.log(`DB data rows ${rows.length}개 전송`)
     })
  });
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
