
 import * as firebase from 'firebase'
 
 
 var firebaseConfig = {
    apiKey: "AIzaSyB1h-uOgi4qnMfISgZTrQPzy_SVNTLI2yA",
    authDomain: "photowall-897cf.firebaseapp.com",
    databaseURL: "https://photowall-897cf.firebaseio.com",
    projectId: "photowall-897cf",
    storageBucket: "photowall-897cf.appspot.com",
    messagingSenderId: "567414533363",
    appId: "1:567414533363:web:121fd0ad70b8ddb2ea1b86",
    measurementId: "G-5M5PMGBXX5"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  export {database}