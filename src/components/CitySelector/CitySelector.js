import React from 'react';
import './CitySelector.scss';
import { ReactComponent as InputIcon } from './search.svg';

InputIcon.displayName = 'SearchIcon';

const CitySelector =(props) => {
    return (
        <div
            className={'citySelector ' + (props.isActive ? 'citySelector_active' : '')}
            onClick={props.handleOpenClick}
        >
            <div className={'citySelector__current '}>
                {props.globalCity}
            </div>

            <div className={'citySelector__selector '+ (props.isActive ? 'citySelector__selector_active' : '')}>
                <div className={'citySelector__selector-input'}>
                    {
                        props.isActive ? (
                                <input
                                    className={'citySelector__selector-input-item'}
                                    onKeyUp={(e) => props.inputSearch(e.target.value)}
                                    autoFocus
                                />) : (
                                    <div className={'citySelector__selector-input-item_disabled'}/>
                            )
                    }
                    <div className={'citySelector__selector-input-icon'}>
                        <InputIcon />
                    </div>
                </div>

                <ul className={'citySelector__selector-options'}>
                    {props.cityOptions.map((city, index) => {
                        return (
                            <li
                                key={index}
                                className={'citySelector__selector-options-item'}
                                onClick={props.handleSelectClick}
                            >
                                {city.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default CitySelector;