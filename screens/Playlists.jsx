import { Appearance, Platform, ScrollView, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from '../components/Themed'
import { MaterialCommunityIcons,  FontAwesome5, EvilIcons, AntDesign } from '@expo/vector-icons';
import Colors from '../utils/constants/Colors';
import Song from '../components/Song';
import { PlaylistsData } from '../utils/constants/Data';

const Playlists = () => {
    const theme = useColorScheme()

    const ios = Platform.OS === 'ios'
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ paddingTop: 16, flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5 name="music" size={40} color={Colors.light.themeColor} />
                    <Text style={{fontSize: 30, fontWeight: '600', marginLeft: 20}}>Playlists</Text>
                </View>
                <View>
                    <EvilIcons name="search" size={50} color={Colors[theme]['tint']} />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, marginTop: 16}}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>14 playlists</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: Colors[theme]['themeColor'], marginRight: 8}}>Recently Added</Text>
                    <MaterialCommunityIcons name="sort" size={24} color={Colors[theme]['themeColor']} />
                </View>
            </View>
            <View style={{backgroundColor: Colors[theme]['tint'], height: 2, marginHorizontal: 16, marginVertical: 16}}></View>
            <ScrollView style={{paddingHorizontal: 16, marginBottom: ios ? 50 : 85}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 24, paddingLeft: 16}}>
                    <View style={{backgroundColor: Colors[theme]['themeColor'], borderRadius: 50, padding: 24}}>
                        <AntDesign name="plus" size={24} color="white" />
                    </View>
                    <Text style={{marginLeft: 12, fontSize: 18, fontWeight: '500'}}>Add New Playlist</Text>
                </View>
                {PlaylistsData.map((playlist, index)=> (
                    <Song key={playlist.id} {...playlist} theme={theme} playlist />
                ))}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Playlists

const styles = StyleSheet.create({})