// var environments = {
//     staging: {
//         FIREBASE_API_KEY: 'AIzaSyDrvuE2K720Ik-yNrFhh0ok6aK-Y0kYNuk',
//         FIREBASE_AUTH_DOMAIN: 'sample-app-6f061.firebaseapp.com',
//         FIREBASE_DATABASE_URL: 'https://sample-app-6f061-default-rtdb.firebaseio.com/',
//         FIREBASE_PROJECT_ID: 'sample-app-6f061',
//         FIREBASE_STORAGE_BUCKET: 'sample-app-6f061.appspot.com',
//         FIREBASE_MESSAGING_SENDER_ID: '419686046876',
//         GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyDVl-Zb3MWb6ZENpNGDmBHViAE9evqx-4U'
//     },
//     production: {
//         // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
//     }
// };
// function getReleaseChannel() {
//     let releaseChannel = Expo.Constants.manifest.releaseChannel;
//     if (releaseChannel === undefined) {
//         return 'staging';
//     } else if (releaseChannel === 'staging') {
//         return 'staging';
//     } else {
//         return 'staging';
//     }
// }
// function getEnvironment(env) {
//     console.log('Release Channel: ', getReleaseChannel());
//     return environments[env];
// }
// var Environment = getEnvironment(getReleaseChannel());
// export default Environment;
