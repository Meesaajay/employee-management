const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter employee name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter employee email'],
      unique: true,
    },
    department: {
      type: String,
      required: [true, 'Please enter department'],
    },
    position: {
      type: String,
      required: [true, 'Please enter position'],
    },
    salary: {
      type: Number,
      required: [true, 'Please enter salary'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Employee', employeeSchema);
