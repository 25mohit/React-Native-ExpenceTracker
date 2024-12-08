import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Hero from '../Utils/Hero'
import { cStyle, Padding, RowCardHeight } from '../../Style'
import ExpHeroCard from '../Utils/ExpHeroCard'
import SectionHeader from '../Utils/SectionHeader'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { transactionHistory } from '../../MOC_DATA/TransactionData'

const HomeTab = () => {

    const senderImages = [
        require("../../assets/Images/user2.jpg"),
        require("../../assets/Images/user3.jpg"),
        require("../../assets/Images/user4.webp"),
        require("../../assets/Images/user5.webp"),
        require("../../assets/Images/user3.jpg"),
        require("../../assets/Images/user2.jpg"),
        require("../../assets/Images/user3.jpg"),
        require("../../assets/Images/user4.webp"),
        require("../../assets/Images/user5.webp"),
        require("../../assets/Images/user3.jpg"),
    ]

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Hero>
                <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Padding }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#fff' }}>Good afternoon,</Text>
                        <Text style={{ fontSize: 23, color: '#fff', fontWeight: '600', marginTop: 2 }}>Mohit Agarwal</Text>
                    </View>
                    <TouchableOpacity style={cStyle.icon}>
                        <Image style={cStyle.iconItem} source={require("../../assets/Images/notification.png")} />
                    </TouchableOpacity>
                </View>
                <ExpHeroCard />
            </Hero>
            <View style={{ marginTop: responsiveHeight(11), paddingHorizontal: Padding }}>
                <SectionHeader heading="Transactions History" />
                {
                    transactionHistory?.map((data, index) =>
                        <TouchableOpacity key={index} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: RowCardHeight, marginVertical: 5 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.icon}>
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
            </View>

            <View style={{ marginTop: 23, paddingHorizontal: Padding }}>
                <SectionHeader heading="Send Again" />
                <FlatList horizontal data={senderImages} renderItem={({ item, index }) =>
                    <TouchableOpacity key={index}>
                        <Image style={{ width: 60, height: 60, borderRadius: '50%', marginRight: 15 }} source={item} />
                    </TouchableOpacity>} />
            </View>
            <View style={{ height: responsiveHeight(5) }}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icon: {
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

export default HomeTab