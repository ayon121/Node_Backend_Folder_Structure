const { getUserCollection } = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const UserCollections = await getUserCollection();
        const users = await UserCollections.find().toArray();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

module.exports = { getAllUsers};