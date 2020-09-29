import React from 'react';

import './Footer.css';

export const Footer = () => {

    return (
        <footer>
            <div className="footerDiv">
                <h2>
                    <img id="dooms" src={process.env.PUBLIC_URL + '/styleimages/dooms.png'} />
                    &#169; Doomsday Preppers
                <img id="disaster" src={process.env.PUBLIC_URL + '/styleimages/disaster.png'} />
                </h2>
            </div>
        </footer>
    )
}