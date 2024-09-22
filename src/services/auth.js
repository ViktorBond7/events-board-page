import { Registration } from '../db/models/user.js';

export const registerUser = async (payload) => {
  return await Registration.create(payload);
};
