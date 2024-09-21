import { getAllBorder } from '../services/bords.js';

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
