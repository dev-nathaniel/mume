import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from './Themed'

const HomeContent = (props) => {
    const {width, height} = Dimensions.get('screen')
  return (
    <TouchableOpacity>
    <View style={{alignItems: 'center', marginRight: 20, width: (width/2)-20}}>
      <Image resizeMode='cover'  style={{borderRadius: props.artist ? 100 : 20, width: (width/2)-20, height: (width/2)-20}} source={props.image} />
      <Text style={{fontSize: 20, fontWeight: '500', marginTop: 8}}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default HomeContent

const styles = StyleSheet.create({})