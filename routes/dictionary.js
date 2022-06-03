var express = require('express');
var router = express.Router();
const axios = require ("axios");


router.get('/', async (req, res) => {
    const word = req.query.word
    const api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    try {
      axios.get(api_url)      
        .then(function(response){
            res.json(JSON.stringify(response.data));
        })
    } catch (err) {
      console.error(err)
    }
})

module.exports = router