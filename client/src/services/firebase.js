import {initializeApp} from 'firebase';

const app = initializeApp({ 
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY
});

export default app