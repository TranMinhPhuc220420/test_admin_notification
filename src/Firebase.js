import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCfLGCqfahO0oLwUfNaWlHeIymI6Z-Vx0Q",
  authDomain: "cd-testteamc.firebaseapp.com",
  databaseURL: "https://cd-testteamc.firebaseio.com",
  projectId: "cd-testteamc",
  storageBucket: "cd-testteamc.appspot.com",
  messagingSenderId: "1026888844209",
  appId: "1:1026888844209:web:6830cb1aa03f7967b6f390",
  measurementId: "G-SW5WFPB8DM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;