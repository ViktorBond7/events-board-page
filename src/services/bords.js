import { EventCollection } from '../db/models/border.js';

export const getAllBorder = async () => {
  const contacts = await EventCollection.find();
  return contacts;
};
