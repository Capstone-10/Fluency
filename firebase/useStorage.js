import { useState, useEffect } from "react";
import { fireStorage, db } from "../config/environment";

const collection = "test";
const useStorage = (image, collection) => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = fireStorage.ref(image.name);
    const collectionRef = db.collection("test");
    console.log("is collection created?-->", collectionRef);

    storageRef.put(image).on(
      "state_changed",
      (err) => {
        setError(err);
      },
      //func that will fire when the upload is complete
      async () => {
        //this does not override url var above since it is a separate scope
        const url = await storageRef.getDownloadURL();
        //once the upload is complete, we are creating new documnet inside firestore.collection
        await collectionRef.add({ url });
        setUrl(url);
      }
    );
  }, [image]);

  return { url, error };
};

export default useStorage;
