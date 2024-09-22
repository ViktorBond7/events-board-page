import { Registration } from '../db/models/user.js';
import { registerUser } from '../services/auth.js';

export const registerForEvent = async (req, res, next) => {
  try {
    const { fullName, email, dateOfBirth } = req.body;

    if (!fullName || !email || !dateOfBirth) {
      return res.status(400).json({
        message:
          'All fields are required (fullName, email, dateOfBirth, referral)',
      });
    }

    const user = await registerUser(req.body);

    res.status(201).json({
      message: 'Registration successful!',
      data: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
