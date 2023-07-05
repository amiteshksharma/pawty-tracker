import {SERVER_URL_DEV} from '../constants/server';

interface CreateGroupDetails {
  name: string;
  user: string;
  pet_type: string;
}

export const createGroup = (createGroupItems: CreateGroupDetails) => {
  return fetch(`${SERVER_URL_DEV}/group/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: createGroupItems.name,
      user: createGroupItems.user,
      pet_type: createGroupItems.pet_type,
    }),
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};

export const getUserGroups = (user: string) => {
  return fetch(`${SERVER_URL_DEV}/groups`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: user,
    }),
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};
