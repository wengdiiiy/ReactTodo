import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/*
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyDzd8E32OiBgZnfb8Dc1FpdiAHtg51qeB4",
    authDomain: "react-9beaf.firebaseapp.com",
    databaseURL: "https://react-9beaf.firebaseio.com",
    storageBucket: "react-9beaf.appspot.com",
    "rules": {
        ".read": "true",
        ".write": "true"
    }
};
var wendyApp = firebase.initializeApp(config);
var ref;*/

const rootElement = document.getElementsByClassName('todoapp')[0];
ReactDOM.render(<App />, rootElement);