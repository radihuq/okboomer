import React, {useState, useEffect} from 'react';
import './Home.css';

import HomeTheme from './HomeTheme';
import HomeQuote from './HomeQuote';
import HomeFooter from './HomeFooter';

const Home = () => {

    const [currentTheme, setCurrentTheme] = useState({});
    const [theme, setTheme] = useState(localStorage.getItem('obtheme') ? localStorage.getItem('obtheme') : 0);

    const Themes = [
        {id: 0, primary: '#000000', background: '#ffffff', accent: '#f0f0f0'},
        {id: 1, primary: '#ffffff', background: '#000000', accent: '#f0f0f0'},
        {id: 2, primary: '#ecf0f1', background: '#e74c3c', accent: '#34495e'}
    ];

    useEffect(() => {
        setCurrentTheme(Themes[theme]);
    }, [theme]);

    const handleThemeChange = (value) => {
        setTheme(value);
    }

    return (
        <div className="HomeParentDiv" style={{backgroundColor: currentTheme.background}}>
            <HomeTheme themes={Themes} currenttheme={currentTheme} handlethemechange={handleThemeChange}/>
            <HomeQuote currenttheme={currentTheme} />
            <HomeFooter />
        </div>
    );
}

export default Home;