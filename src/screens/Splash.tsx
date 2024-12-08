import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'

const Splash = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding')
        }, 2000)
    }, [])

    return (
        <View style={styles.screen}>
            <Text style={styles.txt}>CoinPlay</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0042D4'
    },
    txt: {
        color: '#fff',
        fontSize: 39,
        fontWeight: '700'
    }
})
export default Splash