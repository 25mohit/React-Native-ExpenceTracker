import { View, Text, StyleSheet, SafeAreaView, FlatList, Animated, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import OnBoardingList from '../Utils/OnBoardingList'
import { onBoardingInterface } from '../../interface/interfcae'
import { cStyle, Padding, ThemeColor } from '../../Style'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../interface/Types'
import Button from '../Utils/Helpers/Button'

const data: onBoardingInterface[] = [
    {
        lab: 'Trusted by millions of people, part of one part',
        img: require("../../assets/Images/on1.png")
    },
    {
        lab: 'Spend money abroad, and track your expense',
        img: require("../../assets/Images/on2.png")
    },
    {
        lab: 'Receive Money From Anywhere In The World',
        img: require("../../assets/Images/on3.png")
    },
]

const OnBoarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const { width } = useWindowDimensions()

    const scrollX = useRef(new Animated.Value(0)).current
    const slideRef = useRef<FlatList<onBoardingInterface> | null>(null)

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const ViuableItemChange = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    const scrollTo = () => {
        if (currentIndex < data.length - 1) {
            slideRef?.current?.scrollToIndex({ index: currentIndex + 1 })
        } else {
            navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.lab}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    bounces={false}
                    scrollEventThrottle={32}
                    pagingEnabled
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    onViewableItemsChanged={ViuableItemChange}
                    viewabilityConfig={viewConfig}
                    ref={slideRef}
                    renderItem={({ item, index }) => {
                        return (
                            <OnBoardingList data={item} key={index} />
                        )
                    }} />
            </View>
            <View style={{ flexDirection: 'row', height: 64 }}>
                {
                    data.map((_, index) => {
                        const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [10, 20, 10],
                            extrapolate: 'clamp'
                        })
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })

                        return <Animated.View key={index} style={[styles.dot, { width: dotWidth, opacity }]}></Animated.View>
                    })
                }
            </View>
            <View style={{ width: '100%', paddingHorizontal: Padding }}>
                {/* <TouchableOpacity style={cStyle.button} onPress={scrollTo}>
                    <Text style={cStyle.btnTxt}>Next</Text>
                </TouchableOpacity> */}

                <Button label='Next' onPress={scrollTo}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        height: 10,
        backgroundColor: ThemeColor,
        marginRight: 10,
        borderRadius: 10
    }
})

export default OnBoarding