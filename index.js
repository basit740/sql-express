const express = require('express');

const app = express();

app.listen(5000, () => console.log('server running at port: 5000'));
app.get('/', (req, res) => res.send('Welcome to sql express backend'));
