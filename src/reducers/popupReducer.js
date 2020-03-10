const popupReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP': {
            return !state;
        }
        default:
            return state;
    }
};

export default popupReducer;