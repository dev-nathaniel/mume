import { Appearance, Image, Platform, ScrollView, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from '../components/Themed'
import Colors from '../utils/constants/Colors'
import { AntDesign, FontAwesome5, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Song from '../components/Song';
import { SettingsData } from '../utils/constants/Data';
import Setting from '../components/Setting';

const Settings = () => {
    const theme = useColorScheme()

    const ios = Platform.OS === 'ios'
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16,}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5 name="music" size={40} color={Colors.light.themeColor} />
                    <Text style={{fontSize: 30, fontWeight: '600', marginLeft: 20}}>Settings</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: Colors[theme]['themeColor'], marginHorizontal: 16, alignItems: 'center', marginVertical: 20, borderRadius: 20, padding: 16}}>
                <View>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 24, fontWeight: '600'}}>Enjoy All Benefits!</Text>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 18, marginVertical: 12}}>Enjoy listening to songs with better audio quality without restrictions and without ads</Text>
                    <TouchableOpacity style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 16, borderRadius: 40}}>
                        <Text style={{color: Colors[theme]['themeColor']}}>Get Premium</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor: Colors[theme]['tint'], height: 2, marginHorizontal: 16, marginVertical: 16}}></View>
            <View style={{paddingHorizontal: 16, flex: 1}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: ios ? 60 : 85}}>
                    {SettingsData.map((setting, index) => (
                        <Setting theme={theme} key={setting.id} {...setting} />
                    ))}
                </ScrollView>
            </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({})