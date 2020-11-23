import firebase from 'firebase';
import { FIREBASE_CONF } from '../helpers/config';

try {
  firebase.initializeApp(FIREBASE_CONF);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

export const db = firebase.database();
export const auth = firebase.auth();
