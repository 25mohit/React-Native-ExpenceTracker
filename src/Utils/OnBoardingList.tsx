import { View, Text, useWindowDimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import { onBoardingInterface } from '../../interface/interfcae'

interface lsitInterface {
    data: onBoardingInterface
}

const OnBoardingList: React.FC<lsitInterface> = ({ data }) => {
    const { width } = useWindowDimensions()

    return (
        <View style={[styles.screen, { width }]}>
            <View style={{ height: '70%', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Image source={data.img} style={styles.img} />
                <Text style={styles.heading}>{data.lab}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    img: {
        justifyContent: 'center',
        // width: 200,
        // height: 250,
        marginBottom: 10
    },
    heading: {
        fontWeight: '700',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10
    }
})

export default OnBoardingList