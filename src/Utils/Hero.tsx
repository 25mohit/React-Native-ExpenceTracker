import { View, StyleSheet, SafeAreaView } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { ThemeColor } from '../../Style'

const Hero: React.FC<PropsWithChildren> = props => {
  return (
    <View style={styles.hero}>
      <SafeAreaView>
        {props.children}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  hero: {
    height: responsiveHeight(30),
    backgroundColor: ThemeColor,
    width: '100%',
    borderBottomLeftRadius: '30%',
    borderBottomRightRadius: '30%',
  },
})
export default Hero