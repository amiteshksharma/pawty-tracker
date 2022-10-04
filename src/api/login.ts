import {SERVER_URL_DEV} from '../constants/server';

export const fetchUserDetails = (email: string) => {
  return fetch(`${SERVER_URL_DEV}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};
