import React from 'react';
import { Text, ScrollView } from 'react-native';

const Test = props => {
    return (
        <ScrollView>
            <Text  style={{padding: 10 }}>{props.test.name}</Text>
        </ScrollView>
    );
};
export default Test;
