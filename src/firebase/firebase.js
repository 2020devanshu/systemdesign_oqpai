import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyBk9jvNlhab2AV5_2s7I_dFsQdyKx9_DWQ",
    authDomain: "oqpai-69f3f.firebaseapp.com",
    projectId: "oqpai-69f3f",
    storageBucket: "oqpai-69f3f.appspot.com",
    messagingSenderId: "169389636653",
    appId: "1:169389636653:web:d5979419efeedb729c8ca4",
    measurementId: "G-X5R5YYPSFS"
};

const app = firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export default app;