import { StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { Text } from './Themed'
import Colors from '../utils/constants/Colors'
import { AntDesign } from '@expo/vector-icons';

const Setting = (props) => {

    const theme = useColorScheme()
  return (
    <TouchableOpacity>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <props.iconType name={props.name} size={24} color={Colors[theme]['text']} />
        <Text style={{marginLeft: 12}}>{props.title}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.content ? <Text>{props.content}</Text> : null}
        {props.toggle ? null : props.nextIcon ? <AntDesign style={{marginLeft: 12}} name="right" size={24} color={Colors[props.theme]['text']} /> :  null}
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Setting

const styles = StyleSheet.create({})