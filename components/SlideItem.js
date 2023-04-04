import React, { useEffect } from "react";
import { View, Text, Image, useColorScheme, Dimensions, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import Animated, {FadeInUp} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');

export function SlideItem ({item}) {

    const colorStyle = useColorScheme() === 'light'? lightStyle: darkStyle;
    const backgroundImage = useColorScheme() === 'light'? require('../assets/app_images/white_background.jpg'): require('../assets/app_images/dark_background.jpg');
    
    return (
        <ImageBackground source={backgroundImage} style={colorStyle.container}>

            <AnimatedLottieView autoPlay loop={false} style={{position: 'absolute', zIndex: 2, bottom: 100, right: -30, height: 250, width: 250}} duration={2000} source={item.step} />
            <View style={{alignItems: 'center', marginTop: 40, flex: 1}}>
                <Animated.Text entering={FadeInUp} style={[colorStyle.text, {zIndex: 4, fontSize: 28, marginBottom: 10, fontWeight: 'bold'}]}>{item.title}</Animated.Text>
                <Animated.Text entering={FadeInUp} style={[colorStyle.text, {marginBottom: 20, paddingHorizontal: 25}]}>{item.subtitle}</Animated.Text>
                
                {/* Анимация */
                item.animation !== undefined && 
                <AnimatedLottieView autoPlay style={{height: 'auto', marginTop: 15}} loop={item.animation.autoloop} duration={item.animation.duration !== undefined? item.animation.duration: 2000} source={item.animation.url} />
                }
            </View>
        </ImageBackground>
    )
}

const lightStyle = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },

    image: {
        height: '100%',
        width: '100%',
    },

    text: {
        fontSize: 18,
        color: 'black',
    }
})

const darkStyle = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },

    image: {
        height: '100%',
        width: '100%',
    },

    text: {
        fontSize: 18,
        color: 'white',
    }
})