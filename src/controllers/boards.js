import { getAllBorder, getAllRegisteredUsers } from '../services/bords.js';

export const getAllBordersController = async (req, res) => {
  try {
    const bords = await getAllBorder();
    res.status(200).json({
      status: 200,
      message: 'Successfully found events board!',
      data: bords,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllRegisteredUsersController = async (req, res, next) => {
  try {
    const users = await getAllRegisteredUsers();

    res.status(200).json({
      message: 'Successfully fetched registered users',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
