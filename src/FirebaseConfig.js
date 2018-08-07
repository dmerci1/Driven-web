import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCH1lFv2azCvmZAldekHjdCzPiRxoX0okU",
    authDomain: "driven-ade2d.firebaseapp.com",
    databaseURL: "https://driven-ade2d.firebaseio.com",
    projectId: "driven-ade2d",
    storageBucket: "driven-ade2d.appspot.com",
    messagingSenderId: "153028246841"
  };

  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true
  };

  firestore.settings(settings);


  export default firebase;
