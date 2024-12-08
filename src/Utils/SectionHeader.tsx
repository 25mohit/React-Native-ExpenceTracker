import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface SectionInterface{
    heading: string
}

const SectionHeader:React.FC<SectionInterface> = ({ heading}) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom: 16}}>
      <Text style={{fontSize: 17, fontWeight: '500'}}>{heading}</Text>
      <TouchableOpacity>
        <Text style={{color: 'rgba(40,40,40,0.6)'}}>See all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeader