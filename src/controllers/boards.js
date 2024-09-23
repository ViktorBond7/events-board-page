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
    const { eventId } = req.params;
    const users = await getAllRegisteredUsers(eventId);

    if (!users) {
      return res.status(404).json({
        message: 'No users found for this event',
      });
    }

    res.status(200).json({
      message: 'Successfully fetched registered users',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
