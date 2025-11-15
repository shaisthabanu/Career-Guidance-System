// firebase.js  (Firebase v8 working version)

var firebaseConfig = {
  apiKey: "AIzaSyCdXXescW_UDpkT5_l4LVk_udM7kbThDuE",
  authDomain: "career-guidance-ec6b0.firebaseapp.com",
  projectId: "career-guidance-ec6b0",
  storageBucket: "career-guidance-ec6b0.appspot.com",
  messagingSenderId: "921642815161",
  appId: "1:921642815161:web:1072353b3c715bb4ad5568"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services
const auth = firebase.auth();
const db = firebase.firestore();
