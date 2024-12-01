import { Appearance, StyleSheet, Dimensions, TouchableOpacity, View, ScrollView, useColorScheme, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from '../components/Themed'
import { FontAwesome5, EvilIcons, Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../utils/constants/Colors';
import Song from '../components/Song';
import { SongsData } from '../utils/constants/Data';


const Favorites = () => {
    const {width, height} = Dimensions.get('screen')
    const theme = useColorScheme()

    const ios = Platform.OS === 'ios'
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{ paddingTop: 16, flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5 name="music" size={40} color={Colors.light.themeColor} />
                    <Text style={{fontSize: 30, fontWeight: '600', marginLeft: 20}}>Favorites</Text>
                </View>
                <View>
                    <EvilIcons name="search" size={50} color={Colors[theme]['tint']} />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginVertical: 20}}>
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: (width/2) - 20, paddingVertical: 16, backgroundColor: Colors[theme]['themeColor'], borderRadius: 30}}>
                        <Ionicons name="ios-shuffle" size={24} color="white" />
                        <Text style={{color: 'white', marginLeft: 12}}>Shuffle</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: (width/2) - 20, paddingVertical: 16, backgroundColor: Colors[theme]['themeColor'], borderRadius: 30, marginLeft: 8}}>
                        <AntDesign name="play" size={24} color='white' />
                        <Text style={{color: 'white', marginLeft: 12}}>Play</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16}}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>175 favorites</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: Colors[theme]['themeColor'], marginRight: 8}}>Date Added</Text>
                    <MaterialCommunityIcons name="sort" size={24} color={Colors[theme]['themeColor']} />
                </View>
            </View>
            <View style={{backgroundColor: Colors[theme]['tint'], height: 2, marginHorizontal: 16, marginVertical: 16}}></View>
            <ScrollView style={{paddingHorizontal: 16, marginBottom: ios ? 50 : 85}}>
                {SongsData.map((song, index)=> (
                <Song key={song.id} {...song} theme={theme} />

                ))}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({})