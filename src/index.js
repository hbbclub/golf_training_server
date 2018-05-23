const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('helloaaaa');
});

const port = 3000;

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Started on Port ${port}`);
  }
});
