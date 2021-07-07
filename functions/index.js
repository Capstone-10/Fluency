// The Cloud Functions for Firebase SDK to create
// Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// If we want to add timeouts to long-running functions
// const runtimeOpts = {
//     timeoutSeconds: 300,
//     memory: '1GB'
//   }
//   exports.myStorageFunction = functions
//   .runWith(runtimeOpts)
//   .storage
//   .object()
//   .onFinalize((object) => {
//     // do some complicated things that take a lot of memory and time
//   });

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.addText = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    // const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('translations').add({input: "I am sleepy"});
    // Send back a message that we've successfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });