// routes/users.ts

import express from 'express';
import User from '../models/user';

const router = express.Router();

// Define a route handler for the '/users' route using HTTP POST method
router.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;

    // Create a new instance of the 'User' model using the data from the request body
    const user = new User({
      username,
      email,
    });

    // Save the user to the database
    await user.save();

    // Respond with a success status and the saved user data
    res.status(201).send({ message: 'User created successfully!', user });
  } catch (error) {
    // If an error occurs, respond with an error status and the error message
    res.status(400).send(error);
  }
});

// Export the router so it can be used in other parts of the application
export default router;
