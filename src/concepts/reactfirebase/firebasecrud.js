import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const createdocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document created successfullt with id", docRef.id);
  } catch (error) {
    console.log("we are getting arror: ", error);
  }
};

export const fetchdocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const alldocs = [];

    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      alldocs.push({ id: doc.id, ...doc.data() });
    });

    return alldocs;
  } catch (error) {
    console.error(error);
  }
};

export const updatedocument = async (collectionName, docId, newdata) => {};

export const deletedocument = async (collectionName, docId) => {};
