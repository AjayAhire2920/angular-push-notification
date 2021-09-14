importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDyVMxDI_Dr9P5DVCTRHIEo55bht69asmY",
    authDomain: "push-notifications-3ce88.firebaseapp.com",
    projectId: "push-notifications-3ce88",
    storageBucket: "push-notifications-3ce88.appspot.com",
    messagingSenderId: "776400316461",
    appId: "1:776400316461:web:cf8b2361f7c53a034670a4",
    measurementId: "G-BHZCPSN6WS"
});

const messaging = firebase.messaging();