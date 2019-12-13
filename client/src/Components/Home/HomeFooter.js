import React from 'react';
import TwitterLogo from '../../Assets/Home/TwitterLogo.svg';

const HomeFooter = () => {

    return (
        <div className="HomeFooterDiv">
            <a href="https://twitter.com/okboomer_guru" target="_blank">
                <img className="HomeFooterImage" src={TwitterLogo} />
            </a>
        </div>
    );
}

export default HomeFooter;