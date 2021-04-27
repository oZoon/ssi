import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import InputLocation from '../components/inputLocation.js';
import WeatherData from '../components/weatherData.js';

export default props => {
    return (
        <View style={props.styleContainer}>
            {props.isLoading ? <ActivityIndicator size="large" /> : (
                <>
                    <InputLocation {...props.inputLocation} />
                    <WeatherData props={props.weatherData} />
                </>
            )}
        </View>
    )
}
