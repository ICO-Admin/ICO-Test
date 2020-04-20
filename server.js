const express = require('express');
const path = require('path');
const app = express();

// route vers admin (accueil)
const admin = require('./server/routes/admin');

// utilisation d'express
app.use(express.static(path.join(__dirname,'dist')));

app.use('/admin', admin);

// redirection de toutes les routes
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist/ICO-Admin/index.html'))
});


// port de prod, ou 4600 si local
const port = process.env.PORT || 4600;
app.listen(port, (req,res)=> {
  console.log(`Running on port ${port}`);
});


