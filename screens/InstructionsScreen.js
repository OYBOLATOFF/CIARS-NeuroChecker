import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, FlatList, Animated } from 'react-native';
import React, {useRef} from 'react';
import { Slides } from '../components/Slides';
import { Pagination } from '../components/Pagination';
import { SlideItem } from '../components/SlideItem';

export default () => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = event => {
      Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX
            }
          }
        }
      ],
      {
        useNativeDriver: false
      })(event);
    };
  
    return (
      <View style={styles.container}>
        <FlatList 
        pagingEnabled showsHorizontalScrollIndicator={false} 
        horizontal style={{height: '100%', width: '100%'}} 
        data={Slides} 
        renderItem={({item}) => <SlideItem item={item}/>} 
        onScroll={handleOnScroll}
        />
        <Pagination data={Slides} scrollX={scrollX} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });