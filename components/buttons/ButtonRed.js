import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient' // import LinearGradient

const ButtonRed = ({onPress, name,h,w})  => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    colors={['#FF6962', '#FFA9A9', '#FF6962']}
                    style={[styles.linearGradient,{height: h,width: w}]}
                    start={{ x: 0, y: 0 }} and end={{ x: 1, y: 1 }}
                >
                    <Text style={{color: 'white', fontWeight:'bold'}}> {name}</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 5,
    },
    linearGradient: {
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },
})
export default ButtonRed;
