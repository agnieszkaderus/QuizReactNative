import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient' // import LinearGradient

const ButtonBlue = ({onPress, name,h,w})  => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    colors={['#ffffff', '#b7cdf5']}
                    style={[styles.linearGradient,{height: h,width: w, margin:3}]}
                    start={{ x: 0, y: 0 }} and end={{ x: 1, y: 1 }}
                >
                    <Text style={{color: 'black', fontWeight:'bold'}}> {name}</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    linearGradient: {
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,

    },
})
export default ButtonBlue
