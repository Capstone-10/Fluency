import {StyleSheet} from "react-native"

export default styles = StyleSheet.create({
    mainView: {
      flex: 1,
    },
    capturedImage: {
      flex: 1,
    },
    nestedView: {
      flex: 1,
      flexDirection: "column",
      padding: 15,
      justifyContent: "flex-end",
    },
    view: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textRetake: {
      color: "#fff",
      fontSize: 20,
    },
    cameraView: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
    },
    submitToGoogle: {
      width: 130,
      height: 40,
  
      alignItems: "center",
      borderRadius: 4,
    },
    previewVisible: {
      width: 130,
      height: 40,
  
      alignItems: "center",
      borderRadius: 4,
    },
    textTranslate: {
        color: "#fff",
        fontSize: 20,
    },
    cameraType: {
      position: "absolute",
      top: "5%",
      left: "5%",
    },
    textFlip: { 
      fontSize: 20, 
      marginBottom: 10, 
      color: "white" 
    },
    languagePicker: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
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
    // selectLanguageText: {
    //   flex: 1,
    //   color: "#fff",
    //   fontSize: 20,
    //   alignItems: "center"
    // }
  });