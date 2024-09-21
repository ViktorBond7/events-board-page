import { EventCollection } from '../db/models/border.js';

export const getAllBorder = async () => {
  const boarders = await EventCollection.find();
  return boarders;
};
