import { EventCollection } from '../db/models/border.js';
import { Registration } from '../db/models/user.js';

export const getAllBorder = async () => await EventCollection.find();

export const getAllRegisteredUsers = async (eventId) => {
  // const { eventId } = req.params;
  console.log('ggggggggggggggggggg1111111', { _id: eventId });

  return await Registration.find({ _id: eventId });
};
