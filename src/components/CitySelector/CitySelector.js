import React from 'react';

const CitySelector =(props) => {
    return (
        <input onKeyUp={(event) => {props.onkeyupSearch(event.target.value)}}/>
    );
};

export default CitySelector;