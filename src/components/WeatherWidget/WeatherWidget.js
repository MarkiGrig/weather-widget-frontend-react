import React from 'react';
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";

const WeatherWidget = () => {
    return (
        <div className={'weather-widget'}>
            <HeaderContainer />
            <Footer />
        </div>
    );
};

export default WeatherWidget;