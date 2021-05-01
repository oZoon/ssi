import {
    SAVE_DATA,
    SAVE_PARTIAL_DATA,
    LOADING,
    ERROR_DATA,
    CHANGE_DATA,
} from '../../lib/constants.js';

export default (state, action) => {
    switch (action.type) {
        case LOADING:
            return Object.assign({}, state, {
                ...state,
                isLoading: action.data,
            })
        case ERROR_DATA:
            return Object.assign({}, state, {
                ...state,
                error: action.data,
            })
        case SAVE_DATA:
            return Object.assign({}, state, {
                ...state,
                store: state.store.some(item => item.id == action.data.id) ? state.store : state.store.concat(action.data),
                partialText: '',
                data: action.data,
                error: '',
                myLocation: action.side == 'myLocation' || state.myLocation ? true : false,
            })
        case CHANGE_DATA:
            return Object.assign({}, state, {
                ...state,
                data: action.data,
            })
        case SAVE_PARTIAL_DATA:
            return Object.assign({}, state, {
                ...state,
                partialText: action.data,
            })
        default:
            return state;
    }
}
