const cityReducer = (state = { name: '',  id: 0 }, action) => {
    switch (action.type) {
        case 'CHANGE_CITY': {
            return state.id !== action.city.id ? action.city : state;
        }
        default:
            return state;
    }
};

export default cityReducer;