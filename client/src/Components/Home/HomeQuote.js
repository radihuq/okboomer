import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HomeQuote = ({currenttheme}) => {

    const [dataLoading, setDataLoading] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [quotes, setQuotes] = useState([]);
    const [newQuote, setNewQuote] = useState(false);
    const [currentQuote, setCurrentQuote] = useState({});

    if (!dataLoaded) {
        if (!dataLoading) {
            setDataLoading(true);
            axios.get(`${process.env.REACT_APP_SERVER}/api/quote/load`)
            .then((res) => {
                setDataLoaded(true);
                setQuotes(res.data.response);
                setNewQuote(true);
            })
            .catch((err) => {
                setDataLoaded(true);
            });
        }
    }

    useEffect(() => {
        if (dataLoaded) {
            let index = getRandomInt(quotes.length);
            setCurrentQuote(quotes[index]);
    
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
    
            setNewQuote(false);
        }
    }, [newQuote]);

    const handleNewQuoteClick = () => {
        setNewQuote(true);
    }

    return (
        <div className="HomeQuoteDiv">
                {!dataLoading ? 
                <div className="HomeQuoteTextDiv">
                    <p className="HomeQuoteText" style={{color: currenttheme.primary}}>Loading...</p> 
                </div>
                :
                <div className="HomeQuoteTextDiv">
                    <p className="HomeQuoteText" style={{color: currenttheme.primary}}>{currentQuote.quote}</p>
                    <p className="HomeQuotePerson" style={{color: currenttheme.primary}}>{currentQuote.person}</p>                
                </div>
                }
            <div className="HomeQuoteButtonDiv">
                <p className="HomeNewQuoteButton" onClick={handleNewQuoteClick} style={{color: currenttheme.primary, border: `1px solid ${currenttheme.primary}`}}>New Quote</p>
            </div>
        </div>
    );
}

export default  HomeQuote;