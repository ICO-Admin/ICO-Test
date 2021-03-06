const express = require('express');
const path = require('path');
const app = express();

// route vers admin (accueil)
const admin = require('./routes/admin');

// utilisation d'express
app.use(express.static(path.join(__dirname,'../public')));

app.use('/admin', admin);

// redirection de toutes les routes
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
});


// port de prod, ou 4600 si local
const port = process.env.PORT || 4600;
app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
});


