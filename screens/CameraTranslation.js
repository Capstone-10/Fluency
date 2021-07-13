import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import Languages from "../languages";

// const { height } = Dimensions.get('window');


export default function CameraTranslation(prop) {

  // const [defaultLang, setDefaultLang] = useState("af")

// useEffect(() => {
//     setDefaultLang(prop.route.params.selectedLanguage)
//   }, [defaultLang])
  // const [screenHeight, setScreenHeight] = useState(0)

  // onContentSizeChange = (contentWidth, contentHeight) => {
  //   setScreenHeight(contentHeight)
  // }

  
  let originalText = prop.route.params.output;
  let translatedVersion = prop.route.params.translatedText;
  let detected = prop.route.params.detectedSourceLang
  
  console.log("detected source carried to cameraTranslation screen-->", detected)
  let selectedLang = prop.route.params.selectedLanguage
  
  // if(selectedLang === "null") {
  //   selectedLang = "af"
  // }
  
  console.log("detected target carried to cameraTranslation screen-->", selectedLang)
  return (
    <SafeAreaView
      style={{ marginTop: 20, marginBottom: 20, backgroundColor: "#F5EFE8" }}
    >
      {/* <View style={styles.languagePicker}>
            <Picker
            selectedValue={selectedLang}
            style={{ height: 100, width: 200 }}
            onValueChange={itemValue => setSelectedLanguage(itemValue)}
            >
                {Object.keys(Languages).map((key) => {
                 return (
                 <Picker.Item key={key} label={Languages[key]} value={key} color="white"/>
                 )
                 })}
            </Picker>
        </View> */}
      
      <View>
        {/* <Text style={styles.language}>English -> Spanish</Text> */}
      </View>
      
      <Text style={styles.headers}>{`${Languages[detected]}`}</Text>
      <Text style={styles.input}>{originalText.replace(/&quot;|&#39;/g,"'")}</Text>
      
      <Text style={styles.headers}>{`${Languages[selectedLang]}`}</Text>
      <Text style={styles.output}>{translatedVersion.replace(/&quot;|&#39;/g,"'")}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 20,
  },
  output: {
    height: 350,
    margin: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 20,
  },
  language: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#439654",
  },
  headers: {
    marginLeft: 12,
    fontSize: 25,
    fontWeight: "bold"
  }, 
  languagePicker: {
    marginLeft: 50,
    height: 30
  }
});
