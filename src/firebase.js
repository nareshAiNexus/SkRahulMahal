import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
	apiKey: "YOUR-API-KEY",
	authDomain: "YOUR-AUTH-DOMAIN",
	databaseURL: "YOUR-DATABASE-URL",
	projectId: "YOUR-PROJETC-ID",
	storageBucket: "YOUR-STORAGE-BUCKET",
	messagingSenderId: "MESSAGE-SENDER-ID",
	appId: "APP-ID",
	measurementId: "MEASUREMENT-ID"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };
