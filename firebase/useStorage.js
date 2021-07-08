// import { useState, useEffect } from "react";
// import { fireStorage } from "../config/environment";

// import React from "react";

// const useStorage = (file) => {
//   const [error, setError] = useState(null);
//   const [url, setUrl] = useState(null);

//   useEffect(() => {
//     const storageRef = fireStorage.ref(file.name);
//     console.log("storageRef-->", storageRef);

//     storageRef.put(file).on(
//       "state_changed",
//       (err) => {
//         setError(error);
//       },
//       async () => {
//         const url = await storageRef.getDownloadURL();
//         console.log("url in storage-->", url);
//       }
//     );
//   }, [file]);
//   return { url, error };
// };

// export default useStorage;
