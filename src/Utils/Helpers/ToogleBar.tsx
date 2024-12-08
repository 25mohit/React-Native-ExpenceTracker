import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface ToogleInterface{
    activeOption: number,
    o1: string,
    o2: string,
    setActiveOption: React.Dispatch<React.SetStateAction<number>>
}

const ToogleBar: React.FC<ToogleInterface> = ({ activeOption, setActiveOption, o1, o2 }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setActiveOption(1)} style={[styles.option, {backgroundColor: activeOption === 1 ? '#fff' : ''}]}>
                <Text style={{color:'#666', fontWeight: '600', fontSize: 15}}>{o1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveOption(2)} style={[styles.option, {backgroundColor: activeOption === 2 ? '#fff' : ''}]}>
                <Text style={{color:'#666', fontWeight: '600', fontSize: 15}}>{o2}</Text>
            </TouchableOpacity>
        </View>
    )
}

const borderRadius = 20

const styles = StyleSheet.create({
    container: {
        borderRadius,
        backgroundColor: '#F4F6F6',
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    option: {
        width: '50%',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius
    }
})

export default ToogleBar