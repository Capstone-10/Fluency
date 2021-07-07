import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'
import { Camera } from 'expo-camera'

import { StatusBar } from 'expo-status-bar'



export default function App() {

//useState hook implementation
const [hasPermission, setHasPermission] = useState(null);
const [startCamera, setStartCamera] = useState(false);
const [previewVisible, setPreviewVisible] = useState(false);
const [capturedImage, setCapturedImage] = useState(null);
const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
const [flashMode, setFlashMode] = useState('off');

// let camera: Camera

useEffect(() => {
    (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
}, []);

if(hasPermission === null) {
    return <View />;
}
if(hasPermission === false) {
    return <Text>No access to camera</Text>
}

const _startCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    if(status === 'granted') {
        setStartCamera(true)
    } else {
        Alert.alert('Access denied')
    }
}

const _takePicture = async () => {
    // if(!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
}

const _savePhoto = () => {}

const _retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    _startCamera()
}

const _handleFlashMode = () => {
    if (flashMode === 'on') {
        setFlashMode('off')
    } else if(flashMode === 'off') {
        setFlashMode('on')
    } else {
        setFlashMode('auto')
    }
}

const _switchCamera = () => {
    if(cameraType === 'back') {
        setCameraType('front')
    } else {
        setCameraType('back')
    }
}


return (
  <View style={styles.container}>
      {startCamera ? (
          <View 
              style={{
                  flex: 1,
                  width: '100%'
              }}
          >
      {previewVisible && capturedImage ? (
          <CameraPreview photo={capturedImage} savePhoto={_savePhoto} retakePicture={_retakePicture} />
      ) : (
          <Camera
              type={cameraType}
              flashMode={flashMode}
              style={{flex: 1}}
              ref={(r) => {
                  camera = r
              }}
          >
              <View
                  style={{
                      flex: 1,
                      width: '100%',
                      backgroundColor: 'transparent',
                      flexDirection: 'row'
                  }}
              >
                  <View
                      style={{
                          position: 'absolute',
                          left: '5%',
                          right: '10%',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                      }}
                  >
                      <TouchableOpacity 
                          onPress={_handleFlashMode}
                          style={{
                              backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                              borderRadius: '50%',
                              height: 25,
                              width: 25
                          }}
                      >
                          <Text
                              style={{
                                  fontSize: 20
                              }}
                          >
                              ⚡️
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={_switchCamera}
                          style={{
                              marginTop: 20,
                              borderRadius: '50%',
                              height: 25,
                              width: 25
                          }}
                      >
                          <Text
                              style={{
                                  fontSize: 20
                              }}
                          >
                              {cameraType === 'front' ? '🤳' : '📷'}
                          </Text>
                      </TouchableOpacity>
                  </View>    
              <View
                  style={{
                      position: 'absolute',
                      bottom: 0,
                      flexDirection: 'row',
                      flex: 1,
                      width: '100%',
                      padding: 20,
                      justifyContent: 'space-between'
                  }}
              >
                  <View 
                      style={{
                          alignSelf: 'center',
                          flex: 1,
                          alignItems: 'center'
                      }}>

                          <TouchableOpacity
                          onPress={_takePicture}
                          style={{
                              width: 70,
                              height: 70,
                              bottom: 0,
                              borderRadius: 50,
                              backgroundColor: '#fff'
                          }}
                          />
                  </View>
              </View>
          </View>
      </Camera>
      )}
       </View>               
      ) : (
      <View 
          style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center'
          }}
      >
          <TouchableOpacity
              onPress={_startCamera}
              style={{
                  width: 130,
                  borderRadius: 4,
                  backgroundColor: '#14274e',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40
              }}
          >
              <Text
                  style={{
                      color:'#fff',
                      fontWeight: 'bold',
                      textAlign: 'center'
                  }}
              >
                  Take a picture
              </Text>
          </TouchableOpacity>
      </View>
      )}
      <StatusBar style='auto' />
  </View> 
)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
}
})



const CameraPreview = ({photo, retakePicture, savePhoto}) => {
console.log('PHOTO', photo)
return (
  <View
      style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
      }}
  >
      <ImageBackground
          sourse={{uri: photo && photo.uri}}
          style={{
              flex: 1
          }}
      >
      <View
          style={{
              flex: 1,
              flexDirection: 'column',
              padding: 15,
              justifyContent: 'flex-end'
          }}
      >
          <View
              style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
              }}
          >
              <TouchableOpacity
                  onPress={retakePicture}
                  style={{
                      width: 130,
                      height: 40,

                      alignItems: 'center',
                      borderRadius: 4
                  }}
              >
                  <Text
                      style={{
                          color: '#fff',
                          fontSize: 20
                      }}
                  >
                      Re-take
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={savePhoto}
              style={{
                  width: 130,
                  height: 40,

                  alignItems: 'center',
                  borderRadius: 4
              }}
              >
                  <Text
                      style={{
                          color: '#fff',
                          fontSize: 20
                      }}
                  >
                      save photo
                  </Text>
              </TouchableOpacity>
          </View>
      </View>
      </ImageBackground>
  </View>
)
}