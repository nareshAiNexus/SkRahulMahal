import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDtmuVRYz8cUXgmZbTAfx04jZ2cW-dzgcY",
	authDomain: "skragulmahal-add0f.firebaseapp.com",
	databaseURL: "https://skragulmahal-add0f-default-rtdb.firebaseio.com",
	projectId: "skragulmahal-add0f",
	storageBucket: "skragulmahal-add0f.firebasestorage.app",
	messagingSenderId: "141640710562",
	appId: "1:141640710562:web:dd1c75272fca2c5cf29afb",
	measurementId: "G-TYDPSY4CCJ"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };
