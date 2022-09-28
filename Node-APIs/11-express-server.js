const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET /hello/Romain
app.get('/hello/:name', (req, res) => {
  res.json({msg: 'Hello ' + req.params.name});
})

app.post('/login', express.json(), (req, res) => {
  console.log(req.body);
  res.json({msg: 'Hello'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
