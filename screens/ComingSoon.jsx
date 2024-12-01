import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView, Text } from '../components/Themed'


const ComingSoon = ({navigation}) => {
  return (
    <SafeAreaView style={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Image resizeMode='contain' style={{}} source={require('../assets/images/rocket3.png')} />
        <View style={{marginTop: 30}}>
        <Text style={{ fontSize: 36}}>COMING SOON</Text>
        <TouchableOpacity style={{marginTop: 30}} onPress={()=> navigation.navigate("TabOne")}>
            <View style={{borderRadius: 15, backgroundColor: 'blue', paddingVertical: 20}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>GO HOME</Text>
            </View>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ComingSoon

const styles = StyleSheet.create({})