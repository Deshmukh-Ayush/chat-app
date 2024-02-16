import {getApp, getApps,initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

const firebaseConfig = {
    apiKey: "AIzaSyAZYn-MFFIBnCrCtv4wvPCKSkYVkhTm9bk",
    authDomain: "rn-chat-app-eb136.firebaseapp.com",
    projectId: "rn-chat-app-eb136",
    storageBucket: "rn-chat-app-eb136.appspot.com",
    messagingSenderId: "574044344708",
    appId: "1:574044344708:web:03afd7547d3a13b7a6cdd1"
  };

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app)

export {app, firestoreDB, firebaseAuth}