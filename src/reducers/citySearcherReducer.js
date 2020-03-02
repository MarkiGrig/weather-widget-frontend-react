const citySearcherReducer = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_CITY-SEARCHER': {
            return state.filter((itm) => itm.id !== action.id)
        }
        case 'DELETE_ALL-CITY-SEARCHERS': {
            return [];
        }
        case 'ADD_CITY-SEARCHER': {
            return state.concat([action.searcher]);
        }
        case 'UPDATE-NAME_CITY-SEARCHER': {
            const newState = [...state];
            const ids = newState.map((itm) => itm.id);
            const ind = ids.indexOf(action.id);
            if (ind !== -1) {
                newState[ind].cityName = action.cityName;
                return newState;
            }
            return state;
        }
        default:
            return state;
    }
};

export default citySearcherReducer;