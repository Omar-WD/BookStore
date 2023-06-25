const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port =process.env.BackEndPort 
const booksRouter = require('./routes/books');

app.use(express.json()) //very very !IMPORTANT/ TO BE ABLE TO USE THE BODY TO POST or PUT U need to write this line.
app.use(cors());
app.get('/', (req, res) => {
res.send("Hello World")	
});
app.use('/api/books',booksRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  });


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});









