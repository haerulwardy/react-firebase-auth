import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDgzwq_i6Fx2L5cnLVZ7VCsgKq7ICvFrBQ",
    authDomain: "crud-react-firebase-d3426.firebaseapp.com",
    projectId: "crud-react-firebase-d3426",
    storageBucket: "crud-react-firebase-d3426.appspot.com",
    messagingSenderId: "934155872797",
    appId: "1:934155872797:web:267e894d4acf192b1074f4"
}

const app = initializeApp(firebaseConfig)
export default app