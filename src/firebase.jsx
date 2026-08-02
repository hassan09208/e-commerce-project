import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBkT7yJuaUPKwP_MQxq9t3UXAKz_KRnbd4",
  authDomain: "luxe-store-d79e3.firebaseapp.com",
  databaseURL: "https://luxe-store-d79e3-default-rtdb.firebaseio.com",
  projectId: "luxe-store-d79e3",
  storageBucket: "luxe-store-d79e3.firebasestorage.app",
  messagingSenderId: "1006058646766",
  appId: "1:1006058646766:web:8e73151826e2b64138d7ff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);