const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   res.send('Accueil test-branch2');
});

module.exports = router;
