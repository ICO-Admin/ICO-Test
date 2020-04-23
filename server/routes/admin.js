const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
   res.send('Accueil test-branch55');
});

module.exports = router;