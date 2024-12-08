import { SafeAreaView, StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import PageHeader from '../Utils/PageHeader'
import { Padding, RowCardHeight, ThemeColor } from '../../Style'
import SectionHeader from '../Utils/SectionHeader'

const StatsTab = () => {

  const [activeOption, setActiveOption] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const transactionHistory = [
    {
      heading: 'Upwork',
      date: 'Today',
      amount: '$ 850.00',
      icon: require("../../assets/Images/upwork.webp"),
      type: "received"
    },
    {
      heading: 'Transfer',
      date: 'Today',
      amount: '$ 85.00',
      icon: require("../../assets/Images/user2.jpg"),
      type: "sent"
    },
    {
      heading: 'Paypal',
      date: 'Today',
      amount: '$ 1,460.00',
      icon: require("../../assets/Images/paypal.png"),
      type: "received"
    },
    {
      heading: 'YouTube',
      date: 'Today',
      amount: '$ 11.99',
      icon: require("../../assets/Images/youtube.png"),
      type: "sent"
    },
    {
      heading: 'Upwork',
      date: 'Today',
      amount: '$ 850.00',
      icon: require("../../assets/Images/upwork.webp"),
      type: "received"
    },
    {
      heading: 'Transfer',
      date: 'Today',
      amount: '$ 85.00',
      icon: require("../../assets/Images/user2.jpg"),
      type: "sent"
    },
    {
      heading: 'Paypal',
      date: 'Today',
      amount: '$ 1,460.00',
      icon: require("../../assets/Images/paypal.png"),
      type: "received"
    },
    {
      heading: 'YouTube',
      date: 'Today',
      amount: '$ 11.99',
      icon: require("../../assets/Images/youtube.png"),
      type: "sent"
    },
  ]

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <PageHeader heading="Statistics" rightIcon={require("../../assets/Images/menu.png")} color="light" />
      <ScrollView style={{ padding: Padding }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => { setActiveOption(0); setActiveIndex(null) }}>
            <Text style={[styles.btn, { backgroundColor: activeOption === 0 ? ThemeColor : '#fff', color: activeOption === 0 ? '#fff' : 'rgba(40,40,40,0.6)' }]}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setActiveOption(1); setActiveIndex(null) }}>
            <Text style={[styles.btn, { backgroundColor: activeOption === 1 ? ThemeColor : '#fff', color: activeOption === 1 ? '#fff' : 'rgba(40,40,40,0.6)' }]}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setActiveOption(2); setActiveIndex(null) }}>
            <Text style={[styles.btn, { backgroundColor: activeOption === 2 ? ThemeColor : '#fff', color: activeOption === 2 ? '#fff' : 'rgba(40,40,40,0.6)' }]}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setActiveOption(3); setActiveIndex(null) }}>
            <Text style={[styles.btn, { backgroundColor: activeOption === 3 ? ThemeColor : '#fff', color: activeOption === 3 ? '#fff' : 'rgba(40,40,40,0.6)' }]}>Year</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 23 }}>
          <SectionHeader heading='Top Spending' />
          {
            transactionHistory?.map((data, index) =>
              <TouchableOpacity onPress={() => setActiveIndex((prev) => prev === index ? null : index)} key={index} style={[{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: RowCardHeight,
                paddingHorizontal: 6,
                marginVertical: 5,
                borderRadius: 8,
                boxShadow: activeIndex === index ? '3 3 15 1 #29756F' : '',
                backgroundColor: activeIndex === index ? ThemeColor : 'rgba(230,230,230,0.2)'
              }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.icon}>
                    <Image source={data.icon} style={{ width: '90%', height: '90%' }} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: '500', color: activeIndex === index ? '#fff' : '#000' }}>{data.heading}</Text>
                    <Text style={{ color: activeIndex === index ? 'rgba(220,220,220,0.9)' : '#666666', fontSize: 13 }}>{data.date}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '600', color: activeIndex === index ? '#fff' : (data.type === 'sent' ? '#F95B51' : '#25A969') }}>{data?.amount}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5
  },
  icon: {
    backgroundColor: '#F0F6F5',
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
    padding: 6
  }
})

export default StatsTab