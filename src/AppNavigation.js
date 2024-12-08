import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/Splash'
import OnBoarding from './screens/OnBoarding'
import Home from './screens/Home'

const AppNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Splash} name='Splash' options={{ headerShown: false }} />
        <Stack.Screen component={OnBoarding} name='OnBoarding' options={{ headerShown: false }} />
        <Stack.Screen component={Home} name='Home' options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation