const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const QuoteModel = require('../models/QuoteModel');
const crypto = require('crypto');

router.post('/new', async (req, res) => {
    const id = crypto.randomBytes(5).toString('hex');
    const quote = new QuoteModel({
        id: id,
        quote: req.body.quote,
        person: req.body.person
    });

    try {
        const savedQuote = await quote.save();
        res.status(200).json({message: `Saved Quote`, response: savedQuote});
    } catch(err) {
        console.log(err);
        res.status(400).json({message: `error`, error: err});
    }
});

router.get('/load', async (req, res) => {
    try {
        QuoteModel.find((err, docs) => {
            if (err) {
                console.log(err);
                res.status(201).json({message: `error`, error: err});
                return;  
            }
    
            if (docs.length === 0) {
                res.status(200).json({message: `No quotes found`});
                return;
            }

            res.status(200).json({message: 'Quotes found', response: docs});
        });
    } catch(err) {
        console.log(err);
        res.status(400).json({message: `error`, error: err});
    }
});

module.exports = router;