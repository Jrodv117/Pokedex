const User = require('../../models/users');
const jwt = require('jsonwebtoken');

module.exports = {
	create,
};

async function create(req, res) {
	try {
		// Add the user to the database
		const user = await User.create(req.body);
		// token will be a string
		// Yes, we can use res.json to send back just a string
		// The client code needs to take this into consideration
		res.json(token);
	} catch (err) {
		// Client will check for non-2xx status code
		// 400 = Bad Request
		res.status(400).json(err);
	}
}
