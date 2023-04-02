import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import LoadingScreen from './screens/LoadingScreen';
import { useEffect, useState } from 'react';
import Animated, {FadeInUp, FadeOutDown} from "react-native-reanimated";

export default function App() {
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    showSplash();
  }, [])

  function showSplash() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }

  if (isLoading) {
    return (
      <Animated.View entering={ FadeInUp } exiting={ FadeOutDown } style={{height: '100%'}}>
        <LoadingScreen/>
      </Animated.View>
    )
  }

  return <MainScreen showSplash={showSplash}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
