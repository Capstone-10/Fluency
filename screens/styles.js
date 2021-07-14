import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  capturedImage: {
    flex: 1
  },
  cameraView: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  submitToGoogleVision: {
    width: 130,
    height: 40,
    alignItems: "center",
    borderRadius: 4
  },
  previewVisible: {
    width: 130,
    height: 40,
    alignItems: "center",
    borderRadius: 4
  },
  textTranslate: {
    color: "#fff",
    fontSize: 20
  },
  generalView: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between"
  },
  alignmentView: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center"
  },
  takePicture: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff"
  },
  selectLanguageText: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    alignItems: "center"
  },
  languagePicker: {
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
  chooseLanguage: {
    color: "white",
    fontSize: 23,
    top: "5%"
  },
  pickerHolder: {
    height: 42,
    width: 182,
    backgroundColor: "#439654",
    opacity: 0.7,
    borderRadius: 10,
    top: "23%"
  },
  cameraPicker: {
    height: 50,
    width: 200,
    top: "6%"
  }
});
