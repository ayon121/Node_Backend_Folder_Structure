<h1>Node Folder Structure</h1>

In a typical Node.js project, it’s best practice to separate the code into different files and folders to make it more organized, maintainable, and scalable. Here's a common folder structure:

<hr>
project-root/
│
├── config/               # Configuration (database connections, environment variables, etc.)
│   └── db.js             # Database connection setup
│
├── controllers/          # Business logic (handles requests and responses)
│   └── userController.js # Contains user-related request handling
│
├── models/               # Database schemas (structure of your MongoDB collections)
│   └── userModel.js      # Contains schema and model for User
│
├── routes/               # API routes (organizes route logic)
│   └── userRoutes.js     # Contains user-related routes
│
├── services/             # Helper functions, like sending emails, handling external APIs, etc.
│   └── emailService.js   # Handles email sending logic
│
├── middlewares/          # Middleware functions (like auth, logging, etc.)
│   └── authMiddleware.js # Auth-related middleware
│
├── .env                  # Environment variables
├── server.js             # Main entry point of your application
└── package.json          # Project dependencies and scripts


<hr>

<b>server.js is the main entry point for application. It's similar to index.js.</b>