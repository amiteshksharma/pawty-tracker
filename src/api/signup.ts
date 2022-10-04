import {SERVER_URL_DEV} from '../constants/server';

interface UserProps {
  email: String;
  username: String;
  uid: String;
}

/**
 * Add user to the database
 * @param user - user object to add to database
 */
const addUserToDatabase = (user: UserProps) => {
  fetch(`${SERVER_URL_DEV}/user/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      uid: user.uid,
      email: user.email,
      username: user.username,
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export {addUserToDatabase};
