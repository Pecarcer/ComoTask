import express from 'express';
import Task from '../models/task';

const router = express.Router();

// Define a route handler for the '/tasks' route using HTTP POST method
router.post('/tasks', async (req, res) => {
    const thisMessage = 'general error';
    try {
        const { title, description, completed } = req.body;        

        // Check if any of the required fields are empty or null
        if (!title || !description || completed === null) {
            const thisMessage = 'One or more of the required fields are empty or null';
            res.status(400).send({ error: thisMessage });
            return; // Exit the route handler
        }

        // Create a new instance of the 'Task' model using the data from the request body
        const task = new Task({
            title,
            description,
            completed,
        });

        if (!task) {
            const thisMessage = 'the task is empty';
            res.status(400).send({ error: thisMessage });
            return; // Exit the route handler
        }

        // Save the task to the database
        await task.save();


        // Respond with a success status and the saved task data
        res.status(201).send({ message: 'Task created successfully!', task });
    } catch (error) {
        // If an error occurs, respond with an error status and the error message
        //const errorMessage = 'An error occurred me cago en dios.';
        res.status(400).send({ error: thisMessage });
    }
});

// Define a route handler for the '/tasks' route using HTTP GET method
router.get('/tasks', async (req, res) => {
    try {
      // Retrieve all tasks from the database
      const tasks = await Task.find();
  
      // Respond with the retrieved tasks
      res.status(200).send(tasks);
    } catch (error) {
      // If an error occurs, respond with an error status and the error message
      res.status(500).send(error);
    }
  });

// Export the router so it can be used in other parts of the application
export default router;
