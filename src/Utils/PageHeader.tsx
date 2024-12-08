import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Padding } from '../../Style'
import { useNavigation } from '@react-navigation/native'

interface PageInterface{
    heading: string,
    rightIcon: any,
    color: any
}

const PageHeader:React.FC<PageInterface> = ({ heading, rightIcon, color }) => {
    const navigation = useNavigation()

    return (
        <View style={{ height: responsiveHeight(6), paddingHorizontal: Padding, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={[styles.icon, {tintColor: color === 'light' ? '#000' : '#fff'}]} source={require("../../assets/Images/back.png")} />
            </TouchableOpacity>
            <Text style={{fontSize: 19, color: color === 'light' ? '#000' : '#fff', fontWeight:'600'}}>{heading}</Text>
            <TouchableOpacity>
                <Image style={[styles.icon, {tintColor: color === 'light' ? '#000' : '#fff'}]} source={rightIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20
    }
})

export default PageHeader