/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { useEffect, useState } from 'react';
import { Text as DefaultText, useColorScheme, Appearance } from 'react-native';
import { SafeAreaView as DefaultView } from 'react-native-safe-area-context';
import Colors from '../utils/constants/Colors';

/*export function useThemeColor({ colorName}) {
  const theme = Appearance.getColorScheme();
useEffect(()=>{
  console.log(theme)
})
  return Colors[theme][colorName];
}*/



export function Text(props) {
  const { style, ...otherProps } = props;
  //const color = useThemeColor('text');
const theme = useColorScheme()

  const [Theme, setTheme] = useState(theme)
  useEffect(()=>{
    Appearance.addChangeListener((preferences)=>{
      const {colorScheme} = preferences
      setTheme(colorScheme)
    })
  })


  return <DefaultText style={[{ color: Colors[Theme]['text'] }, style]} {...otherProps} />;
}

export function SafeAreaView(props) {
  const { style, ...otherProps } = props;
  //const backgroundColor = useThemeColor('background');
  //console.log(backgroundColor)
  const theme = useColorScheme()

  const [Theme, setTheme] = useState(theme)
  useEffect(()=>{
    Appearance.addChangeListener((preferences)=>{
      const {colorScheme} = preferences
      setTheme(colorScheme)
    })
  })

  return <DefaultView style={[{ backgroundColor: Colors[Theme]['background'] }, style]} {...otherProps} />;
}
