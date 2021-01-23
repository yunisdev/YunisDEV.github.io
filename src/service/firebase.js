import firebase from 'firebase'
import data from './firebase.json'

var firebaseApp = firebase.initializeApp(data);

var db = firebaseApp.firestore()
firebase.analytics();
export { db }