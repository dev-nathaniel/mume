import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import { useColorScheme, Appearance } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';



export default function App() {
  const colorScheme = Appearance.getColorScheme();
  
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  
}


