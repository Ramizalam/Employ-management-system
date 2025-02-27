# Employee Management System

## Overview
The Employee Management System is a web application designed to manage employee tasks and roles. It provides an interface for employees to view and manage their tasks and for administrators to oversee the entire system.

## Features
- **Employee Login**: Employees can log in using their email and password.
- **Admin Login**: Admins can log in using their credentials to access the admin dashboard.
- **Task Management**: Employees can view their tasks categorized as new, active, completed, or failed.
- **Admin Dashboard**: Admins can manage employee data and tasks.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool for faster development.
- **Local Storage**: Used for storing employee and admin data.

## Installation

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
   ```

2. **Navigate to the project directory**:  
   ```bash
   cd employee-management-system
   ```

3. **Install dependencies**:  
   ```bash
   npm install
   ```

4. **Start the development server**:  
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/).  
2. Log in using the following credentials:  
   - **Admin**: `admin@me.com` / `123`  
   - **Employee**: Use any employee email and password from the `localStorage.jsx` file.

## File Structure

- `src/Components/Auth/Login.jsx`: Login component for both employees and admins.  
- `src/Components/Dashboard/EmployeDashboard.jsx`: Dashboard component for employees.  
- `src/Components/Dashboard/AdminDashboard.jsx`: Dashboard component for admins.  
- `src/utils/localStorage.jsx`: Utility functions for setting and getting data from local storage.  
- `src/utils/AuthProvider.jsx`: Context provider for authentication data.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## Contact

For any questions or feedback, please contact [ranizalam63@gmail.com](mailto:ranizalam63@gmail.com).
