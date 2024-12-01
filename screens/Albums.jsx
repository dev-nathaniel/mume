import { Appearance, StyleSheet, View, ScrollView, TouchableOpacity, useColorScheme, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, Text } from '../components/Themed'
import { FontAwesome5, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../utils/constants/Colors';
import Song from '../components/Song';
import { useRoute } from '@react-navigation/native';
import { AlbumsData, ArtistsData } from '../utils/constants/Data';
import Album from '../components/album';

const Albums = ({navigation}) => {

  const [categoryState, setCategoryState] = useState('Suggested');
    const route = useRoute()

    const theme = useColorScheme()
const ios = Platform.OS === 'ios'
    const onPressFunc = (title) => {
        setCategoryState(title)
        navigation.navigate(title)
    } 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ paddingTop: 16, flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5 name="music" size={40} color={Colors.light.themeColor} />
                    <Text style={{fontSize: 30, fontWeight: '600', marginLeft: 20}}>Mume</Text>
                </View>
                <View>
                    <EvilIcons name="search" size={50} color={Colors[theme]['tint']} />
                </View>
            </View>
            <View style={{marginVertical: 20, marginHorizontal: 8, paddingLeft: 16}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <TouchableOpacity onPress={()=>onPressFunc('Suggested')} style={{marginRight: 16}}>
                        <Text style={{fontSize: 20, color: route.name === 'Suggested' ? Colors[theme]['themeColor'] : Colors[theme]['tint']}}>Suggested</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onPressFunc('Songs')} style={{marginRight: 16}}>
                        <Text style={{fontSize: 20, color: route.name === 'Songs' ? Colors[theme]['themeColor'] : Colors[theme]['tint']}}>Songs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onPressFunc('Artists')} style={{marginRight: 16}}>
                        <Text style={{fontSize: 20, color: route.name === 'Artists' ? Colors[theme]['themeColor'] : Colors[theme]['tint']}}>Artists</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onPressFunc('Albums')} style={{marginRight: 16}}>
                        <Text style={{fontSize: 20, color: route.name === 'Albums' ? Colors[theme]['themeColor'] : Colors[theme]['tint']}}>Albums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onPressFunc('Folders')} style={{marginRight: 16}}>
                        <Text style={{fontSize: 20, color: route.name === 'Folders' ? Colors[theme]['themeColor'] : Colors[theme]['tint']}}>Folders</Text>
                    </TouchableOpacity>
                </ScrollView>
        
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>{AlbumsData.length} albums</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: Colors[theme]['themeColor'], marginRight: 8}}>Date Modified</Text>
                    <MaterialCommunityIcons name="sort" size={24} color={Colors[theme]['themeColor']} />
                </View>
            </View>
            <View style={{backgroundColor: Colors[theme]['tint'], height: 2, marginHorizontal: 16, marginVertical: 16}}></View>
            <View style={{flex: 1}}>
            <FlatList style={{paddingHorizontal: 16, marginBottom:ios ? 70 : 95}} showsVerticalScrollIndicator={false} numColumns={2}
          data={AlbumsData}
          renderItem={({item, index}) => {
            return (
              <Album index={index} {...item} />
            )
          }}

        />
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Albums

const styles = StyleSheet.create({})