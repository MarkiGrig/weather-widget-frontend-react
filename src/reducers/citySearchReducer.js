const citySearchReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_CITY-SEARCH-LINE': {
            return action.citySearchLine;
        }
        case 'CLEAR_CITY-SEARCH-LINE': {
            return '';
        }
        default:
            return state;
    }
};

export default citySearchReducer;