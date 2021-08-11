const Quote = require("../models/quotes.js");

const getRandomQuote = async () => {
    const count = await Quote.count();
    const random = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(random);

    return randomQuote;
}

const createQuote = async (quote) => {
    const newQuote = new Quote(quote);
    await newQuote.save();
    return newQuote;
}

module.exports = { getRandomQuote, createQuote };