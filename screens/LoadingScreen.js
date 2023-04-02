import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Animated, {FadeInUp, FadeOutDown, FadeInRight} from "react-native-reanimated";

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
        }, 1300)

        return function() {
            showImage(false); showTitle(false);
        }
    }, [])

    return (
        <ImageBackground style={styles.screen} source={require('../assets/app_images/white_background.jpg')}>
            {image && <Animated.Image entering={FadeInUp} source={require('../assets/app_images/loading.png')} style={[{top: height/2-100}, styles.image]}/>}
            {title && <Animated.Text entering={FadeInRight} style={[{top: height/2-100}, styles.text]}>Оцени ущерб в один клик!</Animated.Text>}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen: {
        // backgroundColor: 'red',
        flex: 1,
        alignItems: 'center'
    },

    image: {
        width: 360,
        height: 120,
        transform: [{
            scale: 0.75
        }]
    },

    text: {
        color: 'gray',
        fontSize: 21,
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
})