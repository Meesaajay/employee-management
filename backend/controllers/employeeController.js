const Employee = require('../models/Employee');

// @desc Get all employees
// @route GET /api/employees
// @access Private
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc Get a single employee by ID
// @route GET /api/employees/:id
// @access Private
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc Add a new employee
// @route POST /api/employees
// @access Private
const addEmployee = async (req, res) => {
  const { name, email, department, position, salary } = req.body;

  if (!name || !email || !department || !position || !salary) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const employee = new Employee({ name, email, department, position, salary });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Update employee details
// @route PUT /api/employees/:id
// @access Private
const updateEmployee = async (req, res) => {
  const { name, email, department, position, salary } = req.body;

  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    employee.name = name || employee.name;
    employee.email = email || employee.email;
    employee.department = department || employee.department;
    employee.position = position || employee.position;
    employee.salary = salary || employee.salary;

    const updated = await employee.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Delete an employee
// @route DELETE /api/employees/:id
// @access Private
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    await Employee.deleteOne({ _id: req.params.id }); // ✅ Safe delete
    res.status(200).json({ message: 'Employee removed' });
  } catch (error) {
    console.error(error); // 🔍 Log error
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
