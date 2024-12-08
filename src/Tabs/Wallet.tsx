import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationIndependentTree } from '@react-navigation/native'
import WalletTab from './Wallet/WalletTab'
import WalletConnect from './Wallet/WalletConnect'

const Wallet = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationIndependentTree>
      <Stack.Navigator>
        <Stack.Screen name='WalletTab' component={WalletTab} options={{headerShown: false}}/>
        <Stack.Screen name='WalletConnect' component={WalletConnect} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationIndependentTree>
  )
}

export default Wallet