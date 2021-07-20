var firebaseConfig = {
  //your token
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const google = new firebase.auth.GoogleAuthProvider();
export const github = new firebase.auth.GithubAuthProvider();
export const fs = firebase.firestore();
