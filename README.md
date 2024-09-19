<h1>Node Folder Structure</h1>

In a typical Node.js project, it’s best practice to separate the code into different files and folders to make it more organized, maintainable, and scalable. Here's a common folder structure:

<hr>
project-root/ <br>
│
├── config/               # Configuration (database connections, environment variables, etc.) <br>
│   └── db.js             # Database connection setup <br>
│
├── controllers/          # Business logic (handles requests and responses)<br>
│   └── userController.js # Contains user-related request handling<br>
│
├── models/               # Database schemas (structure of your MongoDB collections)<br>
│   └── userModel.js      # Contains schema and model for User <br>
│
├── routes/               # API routes (organizes route logic) <br>
│   └── userRoutes.js     # Contains user-related routes<br>
│
├── services/             # Helper functions, like sending emails, handling external APIs, etc. <br>
│   └── emailService.js   # Handles email sending logic <br>
│
├── middlewares/          # Middleware functions (like auth, logging, etc.) <br>
│   └── authMiddleware.js # Auth-related middleware <br>
│
├── .env                  # Environment variables <br>
├── server.js             # Main entry point of your application <br>
└── package.json          # Project dependencies and scripts <br>


<hr>

<b>server.js is the main entry point for application. It's similar to index.js.</b>