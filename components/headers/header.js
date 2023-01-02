import React from 'react';
import {Text, View} from 'react-native';

const Header = ({text}) => {
    return (
        <View style={{
            height: 50,
            width: "100%",
            backgroundColor: "#fc9e76",
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Text style={{ fontSize: 24, fontFamily:"Sarpanch-Black", color: 'white' }}> {text} </Text>

        </View>
    );

}

export default Header;
