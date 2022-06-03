var express = require('express');
var router = express.Router();
const axios = require("axios");


router.get('/', async (req, res) => {
    const words = req.query.word;
    // console.log(words)
    var result = {};
    for (let word of words) {
        // console.log(word)
        const api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        try {
            await axios.get(api_url)
                .then(function (response) {
                    // console.log(JSON.parse(response.data).meanings)
                console.log(response.data[0].meanings)
                    result[word] = response.data[0].meanings;
                })
        } catch (err) {
            console.error(err)
        }
    }
    // console.log(result)
    res.json(JSON.stringify(result));
})

module.exports = router