const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // ✅ ADD THIS LINE
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandler = require('./middleware/error');

dotenv.config();
connectDB();

const app = express();

// ✅ ENABLE CORS
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend React app
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
