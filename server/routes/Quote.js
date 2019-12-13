const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const QuoteModel = require('../models/QuoteModel');
const crypto = require('crypto');

const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.post('/sms/inbound', async (req, res) => {
    //Webhook set up on Twilio Console
    function parseQuote(text) {
        if (text.indexOf('-') < 0) {
            let quote = text;
            let person = 'Unknown'
            return {
                quote: quote,
                person: person
            }

        } else {
            let index = text.lastIndexOf('-');
    
            let quote = text.substring(0, index);
            if (quote.charAt(quote.length - 1) === ' ') {
                quote = quote.slice(0, quote.length - 1);
            } 
        
            let person = text.substring(index);
        
            person = person.replace('-', '');
        
            if (person.charAt(0) === ' ') {
                person = person.slice(1, person.length);
            }
    
            return {
                quote: quote,
                person: person
            }
        }
    }

    const receivedText = req.body.Body;
    const quoteDetails = parseQuote(receivedText);

    const id = crypto.randomBytes(5).toString('hex');
    const quote = new QuoteModel({
        id: id,
        quote: quoteDetails.quote,
        person: quoteDetails.person
    });

    try {
        await quote.save().then(() => {
            const twiml = new MessagingResponse();
            twiml.message(`Saved quote: ${quote.quote} - ${quote.person}`);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        });

    } catch(err) {
        console.log(err);
        res.status(400).json({message: `error`, error: err});
    }
});

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