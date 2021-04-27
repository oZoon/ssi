import { ACCESS_KEY } from '../../lib/secret.js';
import {
    SAVE_DATA,
    SAVE_PARTIAL_DATA,
    LOADING,
    ERROR_DATA,
    CHANGE_DATA,
} from '../../lib/constants.js';
import location from '../../lib/location.js';
import fetchWrap from '../../lib/fetchWrap.js';

export const defineMyLocation = () => {
    return dispatch => {
        dispatch(loading(true));
        location().then(json => {
            if (json) {
                if (json.message == 'permission not granted') {
                    dispatch(saveError(json.message));
                } else {
                    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${json.coords.latitude}&lon=${json.coords.longitude}&appid=${ACCESS_KEY}`;
                    fetchWrap(link, dispatch, saveData, saveError, loading, 'myLocation');
                }
            } else {
                dispatch(saveError('something wrong'));
            }
        });
    }
}

export const savePartialInput = data => {
    return {
        type: SAVE_PARTIAL_DATA,
        data,
    }
}

export const findWeather = ({ townName, townList }) => {
    return dispatch => {
        if (!townList.some(item => item.name == townName)) {
            dispatch(loading(true));
            const link = `https://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${ACCESS_KEY}`;
            fetchWrap(link, dispatch, saveData, saveError, loading, 'someTown');
        } else {
            dispatch(changeData(townName, townList));
        }
    }
}

const loading = data => {
    return {
        type: LOADING,
        data,
    }
}

const saveData = (data, side) => {
    return {
        type: SAVE_DATA,
        data,
        side,
    };
}

const saveError = data => {
    return {
        type: ERROR_DATA,
        data,
    }
}

const changeData = (townName, townList) => {
    return {
        type: CHANGE_DATA,
        data: townList.find(item => item.name == townName),
    };

}
