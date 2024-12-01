import { FontAwesome5, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useColorScheme, View } from 'react-native';
import Colors from '../utils/constants/Colors';
import ComingSoon from '../screens/ComingSoon';
import ModalScreen from '../screens/ModalScreen';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Playlists from '../screens/Playlists';
import Settings from '../screens/Settings';
import Songs from '../screens/Songs';
import Artists from '../screens/Artists';
import Albums from '../screens/Albums';
import Folders from '../screens/Folders';

export default function Navigation({colorScheme}) {
    return (
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    );
  }


  const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='ComingSoon' component={ComingSoon} options={{headerShown: false}} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name='Suggested' component={Home} />
        <Stack.Screen name='Songs' component={Songs} />
        <Stack.Screen name='Artists' component={Artists} />
        <Stack.Screen name='Albums' component={Albums} />
        <Stack.Screen name='Folders' component={Folders} />
      </Stack.Group>
    </Stack.Navigator>
  )
}


const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].themeColor,
        tabBarStyle: {
          borderRadius: 24,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 95,
          backgroundColor: Colors[colorScheme]['background'],
          borderTopColor: Colors[colorScheme]['background']
        },
        tabBarShowLabel: false
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeNavigator}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Favorites}
        options={{
          title: 'Favorites',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={Playlists}
        options={{
          title: 'Playlists',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-music" size={40} color={color} />
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={Settings}
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="cog" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome5 size={30} {...props} />;
}