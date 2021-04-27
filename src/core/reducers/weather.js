import {
    SAVE_DATA,
    SAVE_PARTIAL_DATA,
    LOADING,
    ERROR_DATA,
    CHANGE_DATA,
} from '../../lib/constants.js';

export default (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case LOADING:
            newState.isLoading = action.data;
            return newState;
        case ERROR_DATA:
            newState.error = action.data;
            return newState;
        case SAVE_DATA:
            newState.store.push(action.data);
            newState.partialText = '';
            newState.data = action.data;
            newState.error = '';
            action.side == 'myLocation' ? newState.myLocation = true: null;
            return newState;
        case CHANGE_DATA:
            newState.data = action.data;
            return newState;
        case SAVE_PARTIAL_DATA:
            newState.partialText = action.data;
            return newState;
        default:
            return newState;
    }
}
