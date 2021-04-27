import React from 'react';
import { TextInput, View, Button } from 'react-native';

export default props => {
    return (
        <View style={props.styleContainer}>
            <TextInput
                style={props.styleTextInput}
                onChangeText={text => props.onChangeText(text)}
                defaultValue={props.value}
            />
            <View style={props.styleButton}>
                <Button
                    onPress={() => props.onPressButton({ townName: props.value, townList: props.townList })}
                    title="find"
                    color="#90ee90"
                />
            </View>
        </View>
    )
}
