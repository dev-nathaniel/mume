import { Dimensions, Image, StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from './Themed'
import Colors from '../utils/constants/Colors'
import { Feather } from '@expo/vector-icons';

const Album = (props) => {
    const theme = useColorScheme()

    const {width, height} = Dimensions.get('screen')
  return (
    <View style={{width: (width/2) - 24, marginTop: 16, marginRight: (props.index + 1)%2 == 0 ? 0 : 16}}>
      <View style={{borderRadius: 20}}>
        <Image style={{width: '100%', height: 159, borderRadius: 20}} source={props.image} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
        <View>
            <Text style={{fontSize: 20, fontWeight: '500',}}>{props.title}</Text>
            <Text style={{fontSize: 12, color: Colors[theme]['tint'], marginTop: 6}}>{props.artist} | 2022</Text>
            <Text style={{fontSize: 12, color: Colors[theme]['tint'], marginTop: 6}}>10 songs</Text>
        </View>
        <Feather style={{marginLeft: 14}} name="more-vertical" size={24} color={Colors[theme]['text']} />
      </View>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({})