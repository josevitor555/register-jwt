const verifyToken = (req, res) =>  {
    const token = req.headers['authorization']; // Get the token from the request headers
    if (!token) {
        return res.status(403).json({ message: 'No token provided' }); // Check if token is provided
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // Verify the token using the secret key
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' }); // Check if token is valid
        }
        req.userId = decoded.id; // Store user ID in request object
    });
}

export default verifyToken; // Export the middleware function for use in routes