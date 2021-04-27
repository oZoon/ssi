export default props => {
    const {
        weather,
        actionSavePartialInput,
        actionFindWeather,
        actionDefineMyLocation,
    } = props;

    const styleContainer = {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
    }
    const isLoading = weather.isLoading;
    const inputLocation = {
        styleContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 50,
        },
        styleTextInput: {
            height: 36,
            width: 250,
            margin: 12,
            padding: 5,
            paddingLeft: 10,
            borderWidth: 2,
            borderColor: '#90ee90',
            fontSize: 16,
        },
        onChangeText: actionSavePartialInput,
        value: weather.partialText,
        styleButton: {
            height: 47,
            padding: 6,
            borderWidth: 0,
        },
        onPressButton: actionFindWeather,
        townList: weather.store,
    }

    const weatherData = weather.error ? [weather.error] : weather.data.id ? [
        `город: ${weather.data.name}`,
        `id: ${weather.data.id}`,
        `температура: ${parseInt(weather.data.temperature - 273)}°C`,
        `ощущается как: ${parseInt(weather.data.feelsLike - 273)}°C`,
        `влажность: ${weather.data.humidity}%`,
        `давление: ${weather.data.pressure}hPa`,
        `скорость ветра: ${weather.data.windSpeed}м/с`,
        `порывы ветра: ${weather.data.windGust}`,
    ] : [];

    const myLocation = !weather.myLocation && !weather.isLoading;

    return {
        styleContainer,
        isLoading,
        inputLocation,
        weatherData,
        myLocation,
        actionDefineMyLocation,
    }
}
