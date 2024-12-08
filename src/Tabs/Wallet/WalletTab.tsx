import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Hero from '../../Utils/Hero'
import PageHeader from '../../Utils/PageHeader'
import { cStyle, RowCardHeight, ThemeColor } from '../../../Style'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { WalletStackParam } from '../../../interface/Types'
import ToogleBar from '../../Utils/Helpers/ToogleBar'
import { transactionHistory } from '../../../MOC_DATA/TransactionData'

const WalletTab = () => {
    const [activeOption, setActiveOption] = useState(1)

    const navigation = useNavigation<NativeStackNavigationProp<WalletStackParam>>()

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Hero>
                <PageHeader heading='Wallet' color="dark" rightIcon={require("../../../assets/Images/menu.png")} />
            </Hero>
            <ScrollView style={[cStyle.formModal, { width: '100%', borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>

                <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#666666', marginVertical: 10 }}>Total Balance</Text>
                    <Text style={{ fontSize: 33, fontWeight: '700', color: '#222222' }} selectable>$ 2,548.00</Text>
                </View>

                <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: '70%', marginVertical: responsiveHeight(5.4), justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('WalletConnect')} style={{ alignItems: 'center' }}>
                        <Image style={[{ width: 30, height: 30 }, styles.icon]} source={require("../../../assets/Images/add.png")} />
                        <Text style={{ fontSize: 16, color: '#222222' }}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image style={[{ width: 30, height: 30 }, styles.icon]} source={require("../../../assets/Images/pay.png")} />
                        <Text style={{ fontSize: 16, color: '#222222' }}>Pay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image style={[{ width: 30, height: 30 }, styles.icon]} source={require("../../../assets/Images/sent.png")} />
                        <Text style={{ fontSize: 16, color: '#222222' }}>Send</Text>
                    </TouchableOpacity>
                </View>

                <ToogleBar activeOption={activeOption} setActiveOption={setActiveOption} o1="Transactions" o2="Upcoming Bills" />

                {
                    activeOption === 1 ?
                        <View style={{ marginTop: 20 }}>
                            {
                                transactionHistory?.map((data, index) =>
                                    <TouchableOpacity key={index} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: RowCardHeight, marginVertical: 5 }]}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={styles.rowIcon}>
                                                <Image source={data.icon} style={{ width: '90%', height: '90%' }} />
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: '500' }}>{data.heading}</Text>
                                                <Text style={{ color: '#666666', fontSize: 13 }}>{data.date}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 18, fontWeight: '600', color: data.type === 'sent' ? '#F95B51' : '#25A969' }}>{data?.amount}</Text>
                                        </View>
                                    </TouchableOpacity>)
                            }
                        </View> :
                        <View style={{ marginTop: 20 }}>
                            {
                                transactionHistory?.slice(2, transactionHistory.length)?.map((data, index) =>
                                    <TouchableOpacity key={index} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: RowCardHeight, marginVertical: 5 }]}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={styles.rowIcon}>
                                                <Image source={data.icon} style={{ width: '90%', height: '90%' }} />
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: '500' }}>{data.heading}</Text>
                                                <Text style={{ color: '#666666', fontSize: 13 }}>{data.date}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={cStyle.activeChip}>Pay</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>)
                            }
                        </View>
                }
                <View style={{height: responsiveHeight(20)}}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 60,
        height: 60,
        borderColor: ThemeColor,
        borderWidth: 1,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 17,
        tintColor: ThemeColor,
        marginBottom: 8,
        fontWeight: '800'
    },
    rowIcon: {
        backgroundColor: '#F0F6F5',
        borderRadius: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7,
        padding: 6
    }
})

export default WalletTab