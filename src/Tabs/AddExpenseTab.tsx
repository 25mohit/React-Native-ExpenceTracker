import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PageHeader from '../Utils/PageHeader'
import Hero from '../Utils/Hero'
import FieldLabel from '../Utils/Helpers/FieldLabel'
import { cStyle } from '../../Style'
import Button from '../Utils/Helpers/Button'

const AddExpenseTab = () => {
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <Hero>
        <PageHeader heading='Add Expense' color="dark" rightIcon={require("../../assets/Images/menu.png")} />
      </Hero>
      <View style={cStyle.formModal}>

        <View style={cStyle.fieldContainer}>
          <FieldLabel label="Name" />
          <TouchableOpacity style={cStyle.field}>
            <View style={cStyle.flex}>
              <Image style={{ width: 19, height: 19, marginRight: 10 }} source={require("../../assets/Images/paypal.png")} />
              <Text style={cStyle.fieldName}>Netflix</Text>
            </View>
            <Image style={cStyle.icon2} source={require("../../assets/Images/down.png")} />
          </TouchableOpacity>
        </View>

        <View style={cStyle.fieldContainer}>
          <FieldLabel label="Amount" />
          <TouchableOpacity style={cStyle.field}>
            <View style={cStyle.flex}>
              <Text style={cStyle.fieldName}>$ 48.00</Text>
            </View>
            <Text style={{ fontSize: 13, color: '#666' }}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={cStyle.fieldContainer}>
          <FieldLabel label="Date" />
          <TouchableOpacity style={cStyle.field}>
            <View style={cStyle.flex}>
              <Text style={cStyle.fieldName} selectable>Tue, 22 Feb 2022</Text>
            </View>
            <Image style={[cStyle.icon2, { width: 17, height: 17 }]} source={require("../../assets/Images/calendar.png")} />
          </TouchableOpacity>
        </View>

        <Button label='Add'/>
        {/* <TouchableOpacity style={cStyle.button}>
          <Text style={cStyle.btnTxt}>ADD</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default AddExpenseTab