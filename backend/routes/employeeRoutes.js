const express = require('express');
const router = express.Router();
const {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');

const { protect } = require('../middleware/auth');

// All routes below will be protected by JWT
router.use(protect);

// @route GET /api/employees
router.get('/', getEmployees);

// @route GET /api/employees/:id
router.get('/:id', getEmployeeById);

// @route POST /api/employees
router.post('/', addEmployee);

// @route PUT /api/employees/:id
router.put('/:id', updateEmployee);

// @route DELETE /api/employees/:id
router.delete('/:id', deleteEmployee);

module.exports = router;
