const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userService.registerUser(username, password);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await userService.loginUser(username, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
