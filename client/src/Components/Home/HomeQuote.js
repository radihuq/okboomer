import React, {useState, useEffect} from 'react';

const HomeQuote = ({currenttheme}) => {
    
    const [currentQuote, setCurrentQuote] = useState({});
    const [newQuote, setNewQuote] = useState(false);

    useEffect(() => {
        const Quotes = [
            {quote: `if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`, person: `Marilyn Monroe`},
            {quote: `Be yourself; everyone else is already taken.`, person: `john`},
            {quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe`, person: `Albert Einstein`},
            {quote: `So many books, so little time.`, person: `Frank Zappa`}
        ];

        setCurrentQuote(Quotes[getRandomInt(Quotes.length - 1)]);

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
            <p className="HomeQuoteText" style={{color: currenttheme.primary}}>{currentQuote.quote}</p>
            <p className="HomeQuotePerson" style={{color: currenttheme.primary}}>-{currentQuote.person}</p>
            <button onClick={handleNewQuoteClick}>New Quote</button>
        </div>
    );
}

export default  HomeQuote;