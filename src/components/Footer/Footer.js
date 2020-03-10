import React from 'react';
import Logo from "../Logo/Logo";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'container'}>
                <div className={'footer__logo'}>
                    <Logo />
                </div>

                <div className={'footer__contacts'}>
                    <div className={'footer__contacts-name'}>Григорьев Марк Александрович</div>
                    <div className={'footer__contacts-group'}>БИ-18-1</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
