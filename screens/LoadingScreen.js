import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Animated, {FadeInUp, FadeOutDown, FadeInRight} from "react-native-reanimated";
import AnimatedLottieView from 'lottie-react-native';

export default ({}) => {
    const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];
    const [image, showImage] = useState(false);
    const [title, showTitle] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            showImage(true);
        }, 800)

        setTimeout(() => {
            showTitle(true);
        }, 2000)

        return function() {
            showImage(false); showTitle(false);
        }
    }, [])

    return (
        <ImageBackground style={styles.screen} source={require('../assets/app_images/white_background.jpg')}>
            {image && <Animated.Image entering={FadeInUp} source={require('../assets/app_images/loading.png')} style={[{top: height/2-100}, styles.logotip]}/>}
            {title && <Animated.Image entering={FadeInUp} source={require('../assets/app_images/loading_description2.png')} style={[{top: height/2-100, right: width/2-160}, styles.description]}/>}
            <AnimatedLottieView autoPlay loop={false} style={{position: 'absolute', width: 150, top: height/2-200, left: width/2-80}} source={require('../assets/lottie/camera5.json')}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen: {
        // backgroundColor: 'red',
        flex: 1,
        alignItems: 'center'
    },

    logotip: {
        width: 360,
        height: 120,
        transform: [{
            scale: 0.75
        }]
    },

    description: {
        height: 70, 
        width: 256,
        zIndex: 2
    },

    text: {
        color: 'gray',
        fontSize: 21,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
})