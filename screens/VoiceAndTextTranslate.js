import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import * as firebase from 'firebase';
// let translateNow;
const translateNow =  async (text) => {
    try {
      const translatedText = await firebase.functions().httpsCallable('textToTranslate2')
              return translatedText({input: text})
    } catch (error) {
      console.error(error)
    }
  }
// requestForm.addEventListener('submit', (event) => {
        //   event.preventDefault();
        //   const translated = firebase.functions().httpsCallable('textToTranslate2');
        //   translated({
        //     input: requestForm.textInput.value
        //   })
        // }).then(() => {
        //   requestForm.reset();
        //   requestForm.querySelector('textInput').textContent = '';
        // }).catch((error) => {
        //   requestForm.querySelector('textInput').textContent = error.message
        // })
export default function VoiceAndTextTranslate() {
    const [text, onChangeText] = useState(null);
    return (
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter text to translate"
          />
          <Button  title="Send" onClick={() => setText(text)} onPress={() => {translateNow(text)}}/>
          <Text>Waiting for your input above...</Text>
        </SafeAreaView>
      );
 };
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1
    }
})