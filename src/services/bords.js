import { EventCollection } from '../db/models/border.js';
import { Registration } from '../db/models/user.js';

export const getAllBorder = async () => await EventCollection.find();

export const getAllRegisteredUsers = async (req, res, next) => {
  const { eventId } = req.params;
  console.log('ggggggggggggggggggg1111111', eventId);

  return await Registration.find({ eventId });
};
