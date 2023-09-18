import {SERVER_URL_DEV} from '../constants/server';

interface CreateEventDetails {
  title: string;
  description: string;
  groupId: string;
  createdBy: string;
}

export const createEvent = (createEventItems: CreateEventDetails) => {
  return fetch(`${SERVER_URL_DEV}/events/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: createEventItems.title,
      description: createEventItems.description,
      group_id: createEventItems.groupId,
      created_by: createEventItems.createdBy,
    }),
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};

export const fetchEventsForGroup = (groupId: string) => {
  return fetch(`${SERVER_URL_DEV}/events`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      group_id: groupId,
    }),
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};
