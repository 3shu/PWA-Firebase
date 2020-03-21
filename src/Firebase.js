import * as firebase from 'firebase'
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDfzVXwr67cVLie7s0X_xunmpXFELlAECk",
    authDomain: "pwa-crud-78671.firebaseapp.com",
    databaseURL: "https://pwa-crud-78671.firebaseio.com",
    projectId: "pwa-crud-78671",
    storageBucket: "pwa-crud-78671.appspot.com",
    messagingSenderId: "968518736877",
    appId: "1:968518736877:web:8561c6601b9b2dbbd6e5e4",
    measurementId: "G-RDJXLWSGKH"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;