import React from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";

const {width} = Dimensions.get('screen');

export const Pagination = ({data, scrollX}) => {
    return (
        <View style={styles.container}>
            {
                data.map((_, idx) => {
                    const inputRange = [(idx-1)*width, idx*width, (idx+1)*width]
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [12, 30, 12],
                        extrapolate: 'clamp'
                    })
                    return <Animated.View key={idx.toString()} style={[styles.dot, {width: dotWidth}]} />
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'gray',
        marginHorizontal: 3
    }
})