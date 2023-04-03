import React from "react";
import { View, Text, Button } from "react-native";

export default ({showSplash}) => {
    return (
        <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Text>Страница с инструкцией</Text>
            <Button title="Показать Splash" onPress={showSplash}/>
        </View>
    )
}