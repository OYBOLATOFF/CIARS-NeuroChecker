import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Animated, {FadeInUp, FadeOutDown, ZoomIn} from "react-native-reanimated";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Импортирую окна приложения
import MainScreen from './screens/MainScreen';
import InstructionsScreen from './screens/InstructionsScreen';
import LoadingScreen from './screens/LoadingScreen';

const Tab = createBottomTabNavigator();
const screens = [
  {name: 'Посчитать', component: MainScreen, icon: 'aperture'},
  {name: 'О приложении', component: InstructionsScreen, icon: 'help-circle'},
]

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

  return (
    <NavigationContainer>
      <Animated.View style={{height: '100%'}} entering={ ZoomIn }>
        <Tab.Navigator screenOptions={{tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#00163a',
          borderRadius: 15,
          height: 80,
          paddingVertical: 10,
          ...styles.shadow
        }, tabBarActiveTintColor: '#5897ff', tabBarLabelStyle: {fontSize: 15, marginBottom: 10, fontWeight: 'bold'}}}>
          {screens.map((index, route) => {
            return <Tab.Screen key={screens.indexOf(this)} options={{ 
              tabBarIcon: (tabInfo) => (<Icon name={tabInfo.focused? index.icon: `${index.icon}-outline`} size={30} color={ tabInfo.focused? '#5897ff': 'white' } />)
            }} name={index.name} component={index.component}/>
          })}
        </Tab.Navigator>
      </Animated.View>
      
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    shadowColor: '#003fa7',
    shadowOffset: {
        width: 0,
        height: 20
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5
}
});