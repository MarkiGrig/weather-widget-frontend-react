const cityReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_CITY': {
            return state !== action.cityName ? action.cityName : state;
        }
        default:
            return state;
    }
};

export default cityReducer;