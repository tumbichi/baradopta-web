import { db } from './firebase';
import { PERROS_KEY } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const requestOneDog = (id, callback) => {
  const ref = db.ref().child(PERROS_KEY).child(id);
  ref
    .once('value', (snapshot) => {
      const dogResult = snapshot.val();
      callback(dogResult);
    })
    .catch((error) => {
      callback({ error });
    });
};
