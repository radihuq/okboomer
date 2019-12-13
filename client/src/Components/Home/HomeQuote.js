import React, {useState, useEffect} from 'react';

const HomeQuote = ({currenttheme}) => {
    
    const [currentQuote, setCurrentQuote] = useState({});
    const [newQuote, setNewQuote] = useState(false);

    useEffect(() => {
        const Quotes = [
            {id: 1000, quote: `Be the uncommon amongst the uncommon`, person: `David Goggins`},
            {id: 1000, quote: `We say "peace of mind" but really what we want is peace from mind`, person: `Naval Ravikant`},
        ];

        let index = getRandomInt(Quotes.length);
        setCurrentQuote(Quotes[index]);

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        setNewQuote(false);
    }, [newQuote]);

    const handleNewQuoteClick = () => {
        setNewQuote(true);
    }

    return (
        <div className="HomeQuoteDiv">
            <div className="HomeQuoteTextDiv">
                <p className="HomeQuoteText" style={{color: currenttheme.primary}}>{currentQuote.quote}</p>
                <p className="HomeQuotePerson" style={{color: currenttheme.primary}}>{currentQuote.person}</p>
            </div>
            <div className="HomeQuoteButtonDiv">
                <p className="HomeNewQuoteButton" onClick={handleNewQuoteClick} style={{color: currenttheme.primary, border: `1px solid ${currenttheme.primary}`}}>New Quote</p>
            </div>
        </div>
    );
}

export default  HomeQuote;