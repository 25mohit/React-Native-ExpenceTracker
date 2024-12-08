import { Text, ScrollView, Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Hero from '../Utils/Hero'
import PageHeader from '../Utils/PageHeader'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { cStyle } from '../../Style'

const ProfileTab = () => {
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <Hero>
        <PageHeader heading='Profile' color="dark" rightIcon={require("../../assets/Images/notification.png")} />
      </Hero>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.topSection}>
          <Image style={[styles.profileImage, { zIndex: 1000 }]} source={require("../../assets/Images/mohit.png")} />
          <Text style={{ fontSize: 28, marginTop: 10, fontWeight: '500' , backgroundColor: '#fff', paddingHorizontal: 10, borderRadius: 5}} selectable>Mohit Agarwal</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 19, color: '#2F9E90', fontWeight: '500', backgroundColor: '#fff', paddingHorizontal: 10, borderRadius: 5 }} selectable>@mohitagarwal</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={[styles.scrollSection]}>

          <TouchableOpacity style={[cStyle.flex, styles.row, { borderBlockColor: 'rgba(220,220,220,0.5)', borderBottomWidth: 1 }]}>
            <Image style={[styles.icon]} source={require("../../assets/Images/diamond.png")} />
            <Text style={styles.text}>Invite Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[cStyle.flex, styles.row]}>
            <Image style={styles.icon} source={require("../../assets/Images/userNew.png")} />
            <Text style={styles.text}>Account Info</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[cStyle.flex, styles.row]}>
            <Image style={styles.icon} source={require("../../assets/Images/users.png")} />
            <Text style={styles.text}>Personal Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[cStyle.flex, styles.row]}>
            <Image style={styles.icon} source={require("../../assets/Images/message.png")} />
            <Text style={styles.text}>Message center</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[cStyle.flex, styles.row]}>
            <Image style={styles.icon} source={require("../../assets/Images/shiled.png")} />
            <Text style={styles.text}>Login and security</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[cStyle.flex, styles.row, { marginBottom: responsiveHeight(10) }]}>
            <Image style={styles.icon} source={require("../../assets/Images/security.png")} />
            <Text style={styles.text}>Data and privacy</Text>
          </TouchableOpacity>

        </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  profileImage: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    borderRadius: '50%',
    boxShadow: '0 10 10 1 rgba(160,160,160,0.2)'
  },
  topSection: {
    width: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    top: responsiveWidth(-32),
    paddingTop: responsiveHeight(7),
    minHeight: '85%',
  },
  scrollSection: {
    padding: 30,
    maxHeight: '60%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 24
  },
  row: {
    paddingVertical: 20,
  },
  text: {
    fontSize: 19,
    color: 'rgba(20,20,20,0.9)'
  }
})

export default ProfileTab