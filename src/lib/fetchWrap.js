export default (link, dispatch, saveData, saveError, loading, side) => {
    fetch(link)
    .then(response => response.json())
    .then(json => {
        if (json.cod == 200) {
            const result = {
                name: json.name,
                id: json.id,
                feelsLike: json.main.feels_like,
                humidity: json.main.humidity,
                pressure: json.main.pressure,
                temperature: json.main.temp,
                windSpeed: json.wind.speed,
                windGust: json.wind.gust ? `${json.wind.gust}м/с` : 'не зафиксировано',
            }
            dispatch(saveData(result, side));
        } else {
            dispatch(saveError(json.message));
        }
    })
    .finally(() => dispatch(loading(false)));
}
