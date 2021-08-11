const express = require('express');
const { getRandomQuote, createQuote } = require('../controllers/quotes.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const quote = await getRandomQuote();
        res.status(200).json(quote);
    } catch (e) {
        res.status(404).json({ error: e });
    }
});

router.post('/', async (req, res) => {
    const quote = req.body;
    try {
        const newQuote = await createQuote(quote);
        res.status(201).json(newQuote);
    } catch (e) {
        res.status(404).json({ message: e });
    }
});

module.exports = router;