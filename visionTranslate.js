const vision = require('@google-cloud/vision');
const { Translate } = require("@google-cloud/translate").v2;
// const TOKEN_ARG = 2;
// const tokenPath = process.argv[TOKEN_ARG];
// process.env.GOOGLE_APPLICATION_CREDENTIALS = tokenPath;

// Creates a client and translate instance
const client = new vision.ImageAnnotatorClient({
    keyFilename: "./token.json"
});

const translate = new Translate({
    keyFilename: "./token.json"
});

// const bucketName= "gcf-sources-419686046876-us-central1"
// const filePath = './public/einstein.jpeg';

// // The new ID for your GCS file
// const destFileName = 'sample';

// // Imports the Google Cloud client library
// const {Storage} = require('@google-cloud/storage');

// // Creates a client
// const storage = new Storage({
//     keyFilename: "../token.json"
// });

// async function uploadFile() {
//   await storage.bucket(bucketName).upload(filePath, {
//     destination: destFileName,
//   });

//   console.log(`${filePath} uploaded to ${bucketName}`);
// }

// uploadFile().catch(console.error);
//Now, use the "fetch method in React Native to pass file directory to client.textDetection()"?????

let text;
//We should also initialize a variable to choose second parameter of translate fxn (ie, target language). Variable value will be event.target.value of something, I assume.
//File name 

//OnClick event to store in google storage bucket, then enter uri as textDetection parameter on line 48 OR get uri from photo.uri when picture taken. User needs token, though to use Google Cloud Vision and Translation...

const translatedText = () => {
    client.textDetection("./public/einstein.jpeg").then((results) => {
    text = results[0].fullTextAnnotation.text
    //console.log(text)
    async function translateText() {
        let [translations] = await translate.translate(text, 'es')
        console.log("Translations!!!2323!!!: ", translations)
        // translations = Array.isArray(translations) ? translations : [translations];
        // console.log("Translations:");
        // translations.forEach((translation) => {
        //   console.log(`${translation}`);
        // });
      }
    translateText();
    
}   
).catch((err) => {
    console.error("ERROR:", err)
})
}


console.log(translatedText())