import { Appearance, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from './Themed'
import { AntDesign, Feather } from '@expo/vector-icons';
import Colors from '../utils/constants/Colors';

const Song = (props) => {

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.folderImage ? props.folderImage : <Image style={{width: 100, height: 100, borderRadius: props.song || props.playlistsPage ? 20 : 100}} source={props.image} />}
        <View style={{marginLeft: 14}}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>{props.song ? props.song : props.folderTitle ? props.folderTitle : props.artist}</Text>
            <Text style={{fontSize: 12, color: Colors[props.theme]['tint'], marginTop: 12}}>{props.song ? props.artist : props.folderTitle ? `10 songs` : `1 Album | 20 Songs`}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {props.playlist ? null : <AntDesign name="play" size={30} color={Colors[props.theme]['themeColor']} />}
        <Feather style={{marginLeft: 14}} name="more-vertical" size={24} color={Colors[props.theme]['text']} />
      </View>
    </View>
  )
}

export default Song

const styles = StyleSheet.create({})