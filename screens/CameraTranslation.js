// import React from "react";
// import { Text, SafeAreaView, StyleSheet, View } from "react-native";

// export default function CameraTranslation(prop) {
//   let originalText = prop.route.params.output;
//   let translatedVersion = prop.route.params.translatedText;
//   return (
//     <SafeAreaView style={styles.mainView}>
//       <View style={styles.topView}>
//         <Text sytle={styles.topView}>Engish -> Spanish</Text>
//       </View>
//       <View style={styles.middleView}>
//         <Text sytle={{ fontSize: 20 }}>{originalText}</Text>
//       </View>
//       <View style={styles.bottomView}>
//         <Text>{translatedVersion}</Text>
//       </View>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     backgroundColor: "#F5EFE8",
//     fontSize: 25,
//     alignItems: "center",
//     textAlign: "center",
//   },
//   topView: {
//     height: "10%",
//     width: "85%",
//     top: "5%",
//     borderWidth: 1,
//     borderRadius: 10,
//     backgroundColor: "#439654",
//     textAlign: "center",
//     alignItems: "center",
//     fontSize: 20,
//   },
//   middleView: {
//     position: "relative",
//     borderWidth: 1,
//     height: "30%",
//     width: "85%",
//     top: "10%",
//     paddingTop: "5%",
//     backgroundColor: "white",
//     opacity: 0.8,
//     borderRadius: 10,
//     textAlign: "center",
//     alignItems: "center",

//     fontSize: 20,
//   },
//   bottomView: {
//     top: "15%",
//     height: "40%",
//     width: "85%",
//     paddingTop: "5%",
//     backgroundColor: "white",
//     opacity: 0.8,
//     borderRadius: 10,
//     borderWidth: 1,
//     textAlign: "center",
//     alignItems: "center",
//     fontSize: 20,
//   },
//   language: {
//     fontSize: 30,
//   },
// });
