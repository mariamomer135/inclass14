importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAJj3YEp9c1NxKrRlCENwJ_1b7nZVoFx6Q",
  authDomain: "inclass14-b2fd6.firebaseapp.com",
  projectId: "inclass14-b2fd6",
  storageBucket: "inclass14-b2fd6.firebasestorage.app",
  messagingSenderId: "236368625093",
  appId: "1:236368625093:web:f9a74b5e7954b01c839fac"
});

const messaging = firebase.messaging();
