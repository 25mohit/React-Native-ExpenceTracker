import { View } from 'react-native'
import React, { PropsWithChildren } from 'react'

const Common:React.FC<PropsWithChildren> = props => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export default Common