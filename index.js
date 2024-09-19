const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Task Routes
app.use('/api/tasks', taskRoutes);

// New Added User routes
app.use('/api/users', userRoutes);  


app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
