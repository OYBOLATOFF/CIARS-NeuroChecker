import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text, Button } from 'react-native';
import {AutoFocus, Camera, CameraType, FlashMode} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CameraScreen() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [flash, setFlash] = useState(FlashMode.off);
    const [flashIcon, setFlashIcon] = useState('flash-off-outline');
    const cameraRef = useRef(null);
  
    useEffect(() => {
      (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted')
      })();
    }, [])
    
    return (
      <View style={[styles.container, {top: '0%'}]}>
        <Camera 
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
          autoFocus={AutoFocus.on}>
          </Camera>
          <TouchableOpacity onPress={() => {
            setFlash( flash == FlashMode.off? FlashMode.torch: FlashMode.off )
            setFlashIcon( flash == FlashMode.off? 'flash-outline': 'flash-off-outline' )
          }} style={{width: '15%', position: 'absolute', top: 10, right: 0}}>
                    <Icon
            name={flashIcon}
            color="white"
            size={50}
          />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
          }} style={{width: '15%', position: 'absolute', bottom: 125, right: '40%'}}>
                    <Icon
            name='radio-button-on-outline'
            color="white"
            size={60}
          />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setType( type == CameraType.back? CameraType.front: CameraType.back )
          }} style={{width: '15%', position: 'absolute', bottom: 125, right: 20}}>
                    <Icon
            name='camera-reverse-outline'
            color="white"
            size={60}
          />
          </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
  
    camera: {
      flex: 1,
      width: '150%',
      borderRadius: 20
    }
  });
