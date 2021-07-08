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
      "https://static.parade.com/wp-content/uploads/2019/10/Life-Quotes-Dolly.jpg"
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
