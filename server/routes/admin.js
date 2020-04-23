const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   res.send('Accueil1');
});

module.exports = router;
