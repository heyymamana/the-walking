import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { colors } from '../theme'


export default function BannerTitle() {
    return (
        <View style={style.container}>
            <Image source={require('../assets/images/banner1.png')} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
        backgroundColor: colors.primary,
       
        justifyContent: "stretch",
        alignItems: "center",
    }
}) 

//height: 40,