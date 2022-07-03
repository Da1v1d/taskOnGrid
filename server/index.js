import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
  res.status(201).send('hi');
});

app.post('/signIn', (req, res) => {
  const { email, password } = req.body;
  try {
    if (email !== 'user@mail.com' && password !== 'user') {
      res.status(400).send('user does not exist')
    }
    res.status(200).send('welcome user')
  } catch (e) {
    console.log(e)
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
