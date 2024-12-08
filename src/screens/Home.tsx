import { View, Image } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { ThemeColor } from '../../Style'
import HomeTab from '../Tabs/HomeTab'
import StatsTab from '../Tabs/StatsTab'
import Wallet from '../Tabs/Wallet'
import ProfileTab from '../Tabs/ProfileTab'
import AddExpenseTab from '../Tabs/AddExpenseTab'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Home = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#fff', height: responsiveHeight(8), paddingTop: 7 },
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name="TabOne" component={HomeTab} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={{ width: 25, height: 25, tintColor: focused ? ThemeColor : 'rgba(70,70,70,0.4)' }} source={require("../../assets/Images/home.png")} />
                )
            }} />
            <Tab.Screen name="TabTwo" component={StatsTab} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={{ width: 25, height: 25, tintColor: focused ? ThemeColor : 'rgba(70,70,70,0.4)' }} source={require("../../assets/Images/stats.png")} />
                )
            }} />
            <Tab.Screen name="TabThree" component={AddExpenseTab} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ boxShadow: focused ? '0 10 25 1 rgba(80,80,80,0.5)' : '' ,backgroundColor: ThemeColor, top: '-100%', width: 50, height: 50, padding: 5, borderRadius: '50%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 30, height: 30, tintColor: '#fff' }} source={require("../../assets/Images/add.png")} />
                    </View>
                )
            }} />
            <Tab.Screen name="TabFour" component={Wallet} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={{ width: 25, height: 25, tintColor: focused ? ThemeColor : 'rgba(70,70,70,0.4)' }} source={require("../../assets/Images/wallet.png")} />
                )
            }} />
            <Tab.Screen name="TabFive" component={ProfileTab} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={{ width: 25, height: 25, tintColor: focused ? ThemeColor : 'rgba(70,70,70,0.4)' }} source={require("../../assets/Images/user.png")} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default Home