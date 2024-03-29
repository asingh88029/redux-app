import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAhDZF9emmSnuwHMtiQC4ZNidX3jaPb1Qo",
    authDomain: "redux-app-fs1415.firebaseapp.com",
    projectId: "redux-app-fs1415",
    storageBucket: "redux-app-fs1415.appspot.com",
    messagingSenderId: "110353979825",
    appId: "1:110353979825:web:ec50b72eb7e59efcf88590"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;