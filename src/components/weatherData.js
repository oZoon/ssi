import React from 'react';
import { Text } from 'react-native';

export default ({props}) => {
    return props.map((item, i) => {
        return <Text
            key={i}
            children={item}
            style={{ fontSize: 20 }}
        />
    })
}
