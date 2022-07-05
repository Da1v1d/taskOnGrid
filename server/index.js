const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/dashboard', (req, res) => {
  res.status(201).json({ data: 7 });
});

app.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email !== 'user@mail.com' || password !== 'user') {
      return res.status(400).send('user does not exist');
    }
    res.status(200).send('welcome user');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log('server start'));
  } catch (e) {
    console.log(e.message);
  }
};

start();
