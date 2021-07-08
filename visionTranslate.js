const vision = require("@google-cloud/vision");
const { Translate } = require("@google-cloud/translate").v2;

const client = new vision.ImageAnnotatorClient({
  keyFilename: "./token.json",
});

const translate = new Translate({
  keyFilename: "./token.json",
});

let text;
//node visionTranslate.js
//exampleText.png

const translatedText = () => {
  client
    .textDetection(
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-61bfe.appspot.com/o/1exampleText.png?alt=media&token=4fd2e08b-0fe1-49c1-a00c-38757f634fb0"
    )
    .then((results) => {
      text = results[0].fullTextAnnotation.text;
      //console.log(text)
      async function translateText() {
        let [translations] = await translate.translate(text, "es");
        console.log("Translations!!!2323!!!: ", translations);
        // translations = Array.isArray(translations) ? translations : [translations];
        // console.log("Translations:");
        // translations.forEach((translation) => {
        //   console.log(`${translation}`);
        // });
      }
      translateText();
    })
    .catch((err) => {
      console.error("ERROR:", err);
    });
};

console.log(translatedText());
