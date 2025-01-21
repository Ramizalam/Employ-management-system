

const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update Website Content",
        taskDescription: "Review and update the website homepage content.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-15",
        taskCategory: "Web Development"
      },
      {
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve alignment issues on the contact page.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2025-01-14",
        taskCategory: "Web Development"
      },
      {
        taskTitle: "Database Backup",
        taskDescription: "Create a backup of the customer database.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-10",
        taskCategory: "Database Maintenance"
      }
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 2,
    firstName: "Aarav",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Logo",
        taskDescription: "Create a logo for the new product line.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-05",
        taskCategory: "Graphic Design"
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare slides for the quarterly review meeting.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-20",
        taskCategory: "Business Management"
      },
      {
        taskTitle: "Write Blog Post",
        taskDescription: "Write a post on industry trends for the company blog.",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskDate: "2025-01-12",
        taskCategory: "Content Creation"
      }
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 1 }
  },
  {
    id: 3,
    firstName: "Kavya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Client Follow-Up",
        taskDescription: "Follow up with clients about pending invoices.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-18",
        taskCategory: "Customer Relations"
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from the development team.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-08",
        taskCategory: "Software Development"
      },
      {
        taskTitle: "Test API",
        taskDescription: "Perform integration tests on the new API.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-19",
        taskCategory: "Quality Assurance"
      }
    ],
    taskCounts: { active: 2, newTask: 2, completed: 1, failed: 0 }
  },
  {
    id: 4,
    firstName: "Ishita",
    email: "ramizalam63@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory Check",
        taskDescription: "Verify stock levels in the warehouse.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2025-01-06",
        taskCategory: "Inventory Management"
      },
      {
        taskTitle: "Social Media Campaign",
        taskDescription: "Plan and execute the Valentine’s Day campaign.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-20",
        taskCategory: "Marketing"
      },
      {
        taskTitle: "Onboard New Employee",
        taskDescription: "Assist the HR team in onboarding a new team member.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2025-01-15",
        taskCategory: "Human Resources"
      }
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 5,
    firstName: "Aditya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Generate Reports",
        taskDescription: "Generate monthly sales and performance reports.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2025-01-17",
        taskCategory: "Data Analysis"
      },
      {
        taskTitle: "Update Documentation",
        taskDescription: "Update the user guide for the latest software release.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-16",
        taskCategory: "Technical Writing"
      },
      {
        taskTitle: "Debug Application",
        taskDescription: "Fix bugs in the main application module.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2025-01-18",
        taskCategory: "Software Development"
      }
    ],
    taskCounts: { active: 3, newTask: 2, completed: 0, failed: 0 }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

      
    export const setLocalStorage = () =>{
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('admin', JSON.stringify(admin));

    }
    export const getLocalStorage = () => {
      const employees = JSON.parse(localStorage.getItem('employees'));
      const admin = JSON.parse(localStorage.getItem('admin'));
      return { employees, admin };
    };
    