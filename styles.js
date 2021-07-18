import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  //TabNavigator
  homeImage: {
    color: "black",
    top: "38%",
  },

  //Camera
  mainView: {
    flex: 1,
  },
  capturedImage: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
  },
  cameraNestedView: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column",
  },
  languagePicker: {
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
  chooseLanguage: {
    color: "white",
    fontSize: 23,
    top: "5%",
  },
  pickerHolder: {
    height: 42,
    width: 182,
    backgroundColor: "#439654",
    opacity: 0.7,
    borderRadius: 10,
    marginTop: "23%",
    flexDirection: "column",
  },
  cameraPicker: {
    bottom: "200%",
  },
  generalView: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
  alignmentView: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
  },
  takePicture: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },

  //CameraTranslation

  cameraTranslationBackground: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F5EFE8",
    alignItems: "center",
  },
  cameraTranslationTopView: {
    marginTop: "7%",
    height: "7%",
    width: "85%",
    backgroundColor: "#DD8138",
    opacity: 0.8,
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },

  topViewText: {
    fontSize: 20,
    top: "25%",
    color: "white",
  },

  middleView: {
    marginBottom: "6%",
    height: "25%",
    width: "85%",
    backgroundColor: "white",
    paddingTop: "5%",
    padding: "5%",
    opacity: 0.8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },
  middleText: {
    fontSize: 15,
  },
  topView2: {
    height: "7%",
    width: "85%",
    backgroundColor: "#DD8138",
    opacity: 0.8,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },

  bottomView: {
    height: "37%",
    width: "85%",
    marginBottom: "5%",
    padding: "5%",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },
  bottomText: { fontSize: 15 },
  audio: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  SpeakerButton: {
    color: "#DD8138",
    opacity: 0.9,
  },

//HomeScreen

background: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
},

topView: {
  //10
  height: "10%",
  paddingTop: "5%",
  paddingRight: "5%",
  alignSelf: "flex-end",
},
homeMiddleView: {
  //50
  height: "50%",
  top: 15,
},
homeMiddleViewText: {
  fontSize: 25,
  fontFamily: "CedarvilleCursive_400Regular",
  textAlign: "center",
},
fluencyText: {
  fontSize: 55,
  fontWeight: "bold",
  textAlign: "center",
  fontFamily: "CedarvilleCursive_400Regular",
},
mainBox: {
  //30
  opacity: 0.8,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  height: "40%",
},

cameraButton: {
  width: 130,
  height: 130,
  backgroundColor: "#DD8138",
  marginRight: 20,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
},
textButton: {
  width: 130,
  height: 130,
  backgroundColor: "#439654",
  marginLeft: 20,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
},
handleTranslateText: {
  fontSize: 23,
  fontWeight: "bold",
},
logo: {
  width: 200,
  height: 200,
},
logoContainer: {
  alignItems: "center",
  width: 300,
  height: 300,
  // position: "relative",
  // opacity: 0.8,
  // backgroundColor: "#FFF4EB",
  // borderRadius: 10,
},
helpButton: {
  alignSelf: "flex-end",
  //marginTop: 10,
  //marginBottom: 40,
},
tooptipView: {
  borderColor: "pink",
},
tooltip: {
  fontSize: 16,
  fontWeight: "bold",
  lineHeight: 30,
  paddingBottom: 12,
  //padding: "3%",
  fontFamily: "Georgia",
},
welcomeToFluencyText: {
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  fontFamily: "CedarvilleCursive_400Regular",
},
tooltipView: {
  borderColor: "pink",
},

//TextTranslate

translateBackground: {
  flex: 1,
  height: "100%",
  backgroundColor: "#F5EFE8",
  alignItems: "center",
},
translateTopView: {
  marginTop: "7%",
  height: "7%",
  width: "85%",
  backgroundColor: "#439654",
  opacity: 0.8,
  borderRadius: 10,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 20,
  elevation: 11,
},
translatePicker: {
  position: "relative",
  bottom: 84,
  maxHeight: 100,
  width: 200,
},
translateMiddleView: {
  marginTop: "4%",
  height: "26%",
  width: "85%",
  backgroundColor: "white",
  paddingTop: "5%",
  padding: "5%",
  opacity: 0.8,
  borderRadius: 10,
  fontSize: 15,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 20,
  elevation: 11,
},
translateBottomView: {
  marginTop: "4%",
  height: "40%",
  width: "85%",
  backgroundColor: "white",
  padding: "5%",
  opacity: 0.8,
  borderRadius: 10,
  borderColor: "white",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 20,
  elevation: 11,
},
translateBottomText: {
  fontSize: 15,
},
audio: {
  paddingTop: 25,
  margin: "3%",
  height: "1%",
  display: "flex",
  flexDirection: "row",
},
speakerButton: {
  color: "#439654",
  opacity: 0.9,
},

});
