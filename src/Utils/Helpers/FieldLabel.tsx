import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { cStyle } from '../../../Style'

interface FieldInterface{
    label: string
}
const FieldLabel:React.FC<FieldInterface> = ({ label }) => {
  return (
    <Text style={[cStyle.fieldLabel]}>{label}</Text>
  )
}

export default FieldLabel