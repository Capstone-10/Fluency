// import { useState, useEffect } from "react";
// import { db } from "../config/environment";

// const collection = "test";
// const useFirestore = (collection) => {
//   const [docs, setDocs] = useState([]);
//   useEffect(() => {
//     const unsub = db.collection("test").onSnapshot((snap) => {
//       let documents = [];
//       snap.forEach((doc) => {
//         documents.push({ ...doc.data(), id: doc.id });
//       });
//       setDocs(documents);
//     });
//     return () => unsub();
//   }, ["test"]);
//   return { docs };
// };

// export default useFirestore;
