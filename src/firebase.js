import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Use actual config values from registered firebase app
var config = {
    apiKey: "AIzaSyC3-asabSSpZXbK8hw9ZyQ_G0MS2cMDqn0",
    authDomain: "asset-management-81ceb.firebaseapp.com",
    databaseURL: "https://asset-management-81ceb.firebaseio.com",
    projectId: "asset-management-81ceb",
    storageBucket: "asset-management-81ceb.appspot.com",
    messagingSenderId: "576762724995",
    appId: "1:576762724995:web:4121c0c6133ce5a8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
