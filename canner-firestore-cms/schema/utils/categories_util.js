import { connector } from './index'
import * as firebase from 'firebase';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export function getFirstCategories() {
    return firebase.firestore().collection('category').get();
}
