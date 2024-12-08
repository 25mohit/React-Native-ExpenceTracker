import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { cStyle } from '../../../Style'

interface ButtonInterface {
    label: string,
    onPress?: () => void
}

const Button: React.FC<ButtonInterface> = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={['#69AEA9', '#3E7C78']} // Define your gradient colors here
                style={cStyle.button}
            >
                <Text style={cStyle.btnTxt}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button