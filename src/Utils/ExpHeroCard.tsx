import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Padding } from '../../Style'

const ExpHeroCard = () => {

    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={[styles.wColor, { fontSize: 16 }]}>Total Balance</Text>
                    <Text style={[styles.wColor, { fontSize: 23, fontWeight: '800', marginTop: 5 }]} selectable>$ 2,548.00</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 20, height: 20, tintColor: '#fff' }} source={require("../../assets/Images/menu.png")} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.icon}>
                            <Image source={require("../../assets/Images/dArrow.png")} style={[styles.img, { width: 10, height: 10 }]} />
                        </TouchableOpacity>
                        <Text style={{ color: 'rgba(240,240,240,0.8)' }}>Income</Text>
                    </View>
                    <Text style={[styles.wColor, { fontSize: 21, fontWeight: '600', marginTop: 5 }]} selectable>$ 1,840.00</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.icon}>
                            <Image source={require("../../assets/Images/uArrow.png")} style={[styles.img, { width: 10, height: 10 }]} />
                        </TouchableOpacity>
                        <Text style={{ color: 'rgba(240,240,240,0.8)' }}>Expense</Text>
                    </View>
                    <Text style={[styles.wColor, { fontSize: 21, fontWeight: '600', marginTop: 5 }]} selectable>$ 284.00</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1B5C58',
        width: '92%',
        minHeight: 150,
        height: responsiveHeight(20),
        bottom: '-10%',
        alignSelf: 'center',
        borderRadius: 15,
        boxShadow: '0 5 10 1 rgba(0,0,0,0.2)',
        padding: Padding,
        justifyContent: 'space-between'
    },
    wColor: {
        color: '#fff'
    },
    icon: {
        width: 20,
        height: 20,
        backgroundColor: 'rgba(240,240,240,0.2)',
        borderRadius: '50%',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    img: {
        width: '100%',
        height: '100%',
        tintColor: '#fff',
    }
})

export default ExpHeroCard