import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    position: '',
    salary: ''
  });
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const API_BASE = 'http://localhost:5000/api/employees';

  const token = localStorage.getItem('token');

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const fetchEmployees = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_BASE, authHeaders);
      setEmployees(res.data);
    } catch (err) {
      console.error('Error fetching employees', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (editId) {
        await axios.put(`${API_BASE}/${editId}`, formData, authHeaders);
        setSuccessMessage('Employee updated successfully!');
      } else {
        await axios.post(API_BASE, formData, authHeaders);
        setSuccessMessage('Employee added successfully!');
      }
      resetForm();
      fetchEmployees();
    } catch (err) {
      console.error('Error saving employee', err);
      alert(err.response?.data?.message || 'Failed to save employee');
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      department: '',
      position: '',
      salary: ''
    });
    setEditId(null);
  };

  const handleEdit = (employee) => {
    setFormData({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      position: employee.position,
      salary: employee.salary
    });
    setEditId(employee._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) return;
    
    try {
      await axios.delete(`${API_BASE}/${id}`, authHeaders);
      setSuccessMessage('Employee deleted successfully!');
      fetchEmployees();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error deleting employee', err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Employee Dashboard</h2>
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Engineering"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Software Engineer"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Salary (₹)</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="75000"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? (
            <span className="spinner"></span>
          ) : (
            editId ? 'Update Employee' : 'Add Employee'
          )}
        </button>
        {editId && (
          <button type="button" onClick={resetForm} className="cancel-btn">
            Cancel
          </button>
        )}
      </form>

      <div className="employee-list-container">
        <div className="list-header">
          <h3>Employee Records</h3>
          <div className="total-count">{employees.length} employees</div>
        </div>

        {isLoading && employees.length === 0 ? (
          <div className="loading-state">Loading employees...</div>
        ) : employees.length === 0 ? (
          <div className="empty-state">
            <p>No employees found.</p>
            <p>Add your first employee using the form above.</p>
          </div>
        ) : (
          <div className="employee-grid">
            {employees.map((emp) => (
              <div key={emp._id} className="employee-card">
                <div className="card-header">
                  <h4>{emp.name}</h4>
                  <div className={`department-tag ${emp.department.toLowerCase()}`}>
                    {emp.department}
                  </div>
                </div>
                <div className="card-body">
                  <div className="info-row">
                    <span>Email:</span>
                    <span>{emp.email}</span>
                  </div>
                  <div className="info-row">
                    <span>Position:</span>
                    <span>{emp.position}</span>
                  </div>
                  <div className="info-row">
                    <span>Salary:</span>
                    <span>₹{emp.salary}</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    onClick={() => handleEdit(emp)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(emp._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;