import React from 'react';
import Logo from "../Logo/Logo";
import './Header.scss'
import CitySelectorMainContainer from "../CitySelector/CitySelectorMainContainer";
import LoginContainer from "./LogIn/LoginContainer";

const Header = (props) => {
    return (
        <header className={'header'}>
            <div className={'container'}>
                <div className={'header__logo'}>
                    <Logo />
                </div>
                <div className={'header__citySelector'}>
                    <CitySelectorMainContainer />
                </div>
                <div className={'header__account ' + (props.isPopupActive ? 'header__account_active' : '')}>
                    {
                        props.isLoggedIn ? (
                            <div>logged</div>
                        ) : (
                            <LoginContainer />
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;