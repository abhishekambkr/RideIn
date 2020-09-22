import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDWHpEqKJTy8NkHxaQJRz653Y3a4ltZQ1I',
  authDomain: 'ridein-3169a.firebaseapp.com',
  databaseURL: 'https://ridein-3169a.firebaseio.com',
  projectId: 'ridein-3169a',
  storageBucket: 'ridein-3169a.appspot.com',
  messagingSenderId: '129358415872',
  appId: '1:129358415872:web:cfbb3a7d0893fd47e470e5',
  measurementId: 'G-8PZ52YHLEM',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
