const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Register new user (admin/employee)
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  const { username, password, role } = req.body;

  try {
    const user = await User.create({ username, password, role });

    sendToken(user, 201, res);
  } catch (err) {
    next(new ErrorResponse(err.message, 400));
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new ErrorResponse('Please provide username and password', 400));
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(new ErrorResponse('Login failed', 500));
  }
};

// Send token in response
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};
