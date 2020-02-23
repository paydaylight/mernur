import {initializeApp} from 'firebase';
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID)
const app = initializeApp({ 
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY
});

export default app