import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"

export default function LanguageChoice() {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    return (
        <View style={styles.container}>
            <Picker
            selectedLanguage={selectedLanguage}
            style={{ height: 50, width: 150 }}
            onLanguageChange={(itemLanguage, itemIndex) => setSelectedLanguage(itemLanguage)}
            >
                <Picker.Item label="Spanish" value="Spanish"/>
                <Picker.Item label="Korean" value="Korean"/>
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});