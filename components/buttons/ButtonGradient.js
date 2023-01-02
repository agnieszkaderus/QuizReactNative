import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient' // import LinearGradient

const ButtonBlue = ({onPress, name,h,w,c1, c2, c3})  => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    colors={[c1,c2, c3]}
                    style={[styles.linearGradient,{height: h,width: w}]}
                    start={{ x: 0, y: 0 }} and end={{ x: 1, y: 1 }}
                >
                    <Text style={{color: 'white', fontWeight:'bold', margin: 2}}> {name}</Text>
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
