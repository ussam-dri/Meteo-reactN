import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	//config
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
