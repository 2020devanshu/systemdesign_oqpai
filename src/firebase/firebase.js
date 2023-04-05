import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyBOLgbZoBRa5m73IMwIR6gcJ4WsQMznnNg",
    authDomain: "oqpai-83080.firebaseapp.com",
    projectId: "oqpai-83080",
    storageBucket: "oqpai-83080.appspot.com",
    messagingSenderId: "616978070611",
    appId: "1:616978070611:web:6b4bd3464c1c7ce4cddaa6",
    measurementId: "G-481B7PHKW1"
  };


const app = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
export default app;