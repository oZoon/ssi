import init from './init';
import weather from './weather';

export default (state = init, action) => {
    return {
        weather: weather(state.weather, action),
    };
}
