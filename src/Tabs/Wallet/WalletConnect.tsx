import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Hero from '../../Utils/Hero'
import PageHeader from '../../Utils/PageHeader'
import { cStyle } from '../../../Style'
import ToogleBar from '../../Utils/Helpers/ToogleBar'

const WalletConnect = () => {

    const [activeOption, setActiveOption] = useState(1)

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Hero>
                <PageHeader heading='Connect Wallet' color="dark" rightIcon={require("../../../assets/Images/menu.png")} />
            </Hero>
            <ScrollView style={[cStyle.formModal, { width: '100%', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, height: '100%' }]}>
                <ToogleBar activeOption={activeOption} setActiveOption={setActiveOption} o1="Cards" o2="Accounts" />

            </ScrollView>
        </View>
    )
}

export default WalletConnect