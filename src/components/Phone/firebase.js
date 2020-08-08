import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB47SpE7mYVnvjaAncgmRfNQD5KK6a-pMs",
  authDomain: "react-pets-f6cec.firebaseapp.com",
  databaseURL: "https://react-pets-f6cec.firebaseio.com",
  projectId: "react-pets-f6cec",
  storageBucket: "react-pets-f6cec.appspot.com",
  messagingSenderId: "1011842457865",
  appId: "1:1011842457865:web:eb5ab1717dced1473333d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase