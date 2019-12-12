import React from 'react';

const HomeTheme = ({themes, currenttheme, handlethemechange}) => {

    const handleButtonClick = (e) => {
        localStorage.setItem('obtheme', e.target.id);
        handlethemechange(e.target.id);
    }

    return (
        <div>
            {themes.map((theme, index) => (
                <button key={`theme_${index}`} onClick={handleButtonClick} id={theme.id}>{`THEME ${theme.id}`}</button>
            ))}
        </div>
    );
}

export default HomeTheme;