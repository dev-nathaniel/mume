import { Appearance, Image, Platform, ScrollView, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5, AntDesign, EvilIcons } from '@expo/vector-icons';
import { SafeAreaView, Text } from '../components/Themed'
import Colors from '../utils/constants/Colors';
import { useRoute } from '@react-navigation/native';
import { SuggestedData } from '../utils/constants/Data';
import HomeContent from '../components/HomeContent';

const Home = ({navigation}) => {

  const [categoryState, setCategoryState] = useState('Suggested');

    const theme = useColorScheme()

    const ios =Platform.OS === 'ios'
const route = useRoute()
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

            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: ios ? 50 : 75}}>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Artists</Text>
                    <Text onPress={()=> navigation.navigate('Artists')} style={{fontSize: 18, color: Colors[theme]['themeColor']}}>See All</Text>
                </View>
                <View style={{paddingLeft: 16, marginVertical: 16}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {SuggestedData.Artists.map((artist, index)=> (
                        <HomeContent key={artist.id} {...artist} />
                    ))}
                </ScrollView>
                </View>
            </View>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Songs</Text>
                    <Text onPress={()=> navigation.navigate('Songs')} style={{fontSize: 18, color: Colors[theme]['themeColor']}}>See All</Text>
                </View>
                <View style={{paddingLeft: 16, marginVertical: 16}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {SuggestedData.Songs.map((song, index)=> (
                        <HomeContent key={song.id} {...song} />
                    ))}
                </ScrollView>
                </View>
            </View>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Albums</Text>
                    <Text onPress={()=> navigation.navigate('Albums')} style={{fontSize: 18, color: Colors[theme]['themeColor']}}>See All</Text>
                </View>
                <View style={{paddingLeft: 16, marginVertical: 16}}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {SuggestedData.Albums.map((album, index)=> (
                        <HomeContent key={album.id} {...album} />
                    ))}
                </ScrollView>
                </View>
            </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})