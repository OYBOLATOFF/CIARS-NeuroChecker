import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default ({showSplash}) => {
    return (
        <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Показать Splash" onPress={showSplash}/>
        </View>
    )
}