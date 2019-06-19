import firebase from 'firebase';
import {FirebaseClientStorage} from '@canner/storage';
import {FirestoreClientConnector} from 'canner-graphql-interface';
if (!firebase.apps.length) {
  // Setup connector to connect your services
  firebase.initializeApp({
  apiKey: "AIzaSyBbIuKXVKrJqMCsZd39Qv-z8PDIx9hW-LM",
  authDomain: "image-tagging-100619.firebaseapp.com",
  databaseURL: "https://image-tagging-100619.firebaseio.com",
  projectId: "image-tagging-100619",
  storageBucket: "image-tagging-100619.appspot.com",
  messagingSenderId: "907101074961",
  appId: "1:907101074961:web:7daca369755d94dd"
});
}
const defaultApp = firebase.app();
const connector = new FirestoreClientConnector({
  database: defaultApp.firestore()
});

const imageStorage = new FirebaseClientStorage({
  firebase
});



export default {connector, resolver: {}, imageStorage};

