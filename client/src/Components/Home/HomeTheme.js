import React from 'react';

const HomeTheme = ({themes, currenttheme, handlethemechange}) => {

    const handleButtonClick = (e) => {
        localStorage.setItem('obtheme', e.target.id);
        handlethemechange(e.target.id);
    }

    return (
        <div className="HomeThemeOptions">
            {themes.map((theme, index) => (
                <div 
                key={`theme_${index}`} 
                onClick={handleButtonClick} 
                id={theme.id}
                className="HomeThemeItem"
                style={{
                    backgroundColor: theme.background,
                    border: `1px solid ${currenttheme.primary}`
                }}
                />
            ))}
        </div>
    );
}

export default HomeTheme;