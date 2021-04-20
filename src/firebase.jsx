import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAtrbviv16nIOxZa1Nk2TvAtnyWGaEuwKA",
    authDomain: "lookie-e3936.firebaseapp.com",
    projectId: "lookie-e3936",
    storageBucket: "lookie-e3936.appspot.com",
    messagingSenderId: "1031161265706",
    appId: "1:1031161265706:web:19146e396ddd4a934f4d53"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {auth}
export default db