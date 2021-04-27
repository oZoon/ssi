import {
    savePartialInput,
    findWeather,
    defineMyLocation,
} from '../core/actions';

export default dispatch => ({
    actionDefineMyLocation: () => dispatch(defineMyLocation()),
    actionSavePartialInput: data => dispatch(savePartialInput(data)),
    actionFindWeather: data => dispatch(findWeather(data)),
});
