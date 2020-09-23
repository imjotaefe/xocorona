import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppMain from './src';
import avenirFont from './assets/fonts/avenir-next-lt-pro.otf';
import avenirBoldFont from './assets/fonts/avenir-next-lt-pro-bold.otf';
import avenirDemiFont from './assets/fonts/avenir-next-lt-pro-demi.otf';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  React.useEffect(() => {
    
    let customFonts = {
      'avenir': avenirFont,
      'avenir-bold': avenirBoldFont,
      'avenir-demi': avenirDemiFont,
    }

    async function loadResourcesAndDataAsync() {

      try {
        await Font.loadAsync(customFonts);
        setFontsLoaded( true);
      } catch (e) {
        console.warn(e);
      }
      finally{
        setFontsLoaded(true)
      }
    }
  
    loadResourcesAndDataAsync();
  },[])

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <AppMain />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
