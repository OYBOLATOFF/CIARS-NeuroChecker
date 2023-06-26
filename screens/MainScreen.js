import React, { PureComponent } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import CameraScreen from "./Camera";
import AnimatedLottieView from "lottie-react-native";

class MainScreen extends PureComponent {
    render() {
        return (
            <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                {/* <AnimatedLottieView autoPlay loop={false} style={{position: 'absolute', zIndex: 2, bottom: 100, right: -30, height: 250, width: 250}} duration={2000} source={require('../assets/animations/camera.json')} /> */}
                <CameraScreen/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    }
  });

export default MainScreen;