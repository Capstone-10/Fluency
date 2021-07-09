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

const translatedText = () => {
  client
    .textDetection(
      "https://firebasestorage.googleapis.com/v0/b/fluency-a33e4.appspot.com/o/2021-07-09T00%3A58%3A49.697Z?alt=media&token=58de9e7a-fb54-45d0-898a-91ace6a5ffe0"
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
