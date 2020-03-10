import React from "react";
import './Popup.scss';

const Popup = (props) => {
    return(
        <div className='popup'>
            <div className='popup__inner'>
                <button className={'popup__inner-close'} onClick={props.togglePopup} />
                <div className={'popup__content'}>
                    Вход / Регистрация
                </div>
            </div>
        </div>
    );
};

export default Popup;