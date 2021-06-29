import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBO1v9vlcuywHpeMHucooZyTyY69Yg1cL8',
  authDomain: 'animelab-3e881.firebaseapp.com',
  projectId: 'animelab-3e881',
  storageBucket: 'animelab-3e881.appspot.com',
  messagingSenderId: '820519643473',
  appId: '1:820519643473:web:da193cd765c564904f8b70',
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
