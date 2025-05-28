import { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL; // -> Backend URL: https://register-jwt.onrender.com

const Register = () => {

    // Hooks
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate to different routes

    // Functions
    const handleSubmit = async (e) => {
        e.preventDefault();

        try  {
            // Send a POST request to the server to register the user
            const response = await axios.post(`${apiUrl}/api/auth/register`, { // http://localhost:3000/api/auth/register
                name,
                email,
                password
            });

            // Save the token to local storage
            localStorage.setItem('token', response.data.token); // Store the token in local storage
            localStorage.setItem('user', JSON.stringify(response.data.user)); // Store the user in local storage

            // Navigate to the home page after successful registration
            navigate("/welcome"); // Redirect to the home page
        } catch (error) {
            console.error("Error registering user:", error); // Log the error to the console
            alert("Email or username already exists. Please try again."); // Show an alert to the user
        }
    }

    return (
        <div className="container register">
            <h2> Register Now </h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label> Name </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} required
                    />
                </div>
                <div className="form-group">
                    <label> E-mail </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                </div>
                <div className="form-group">
                    <label> Password </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                </div>

                <div className="container-buttons">
                    <Link to="/login"> Already have an account? </Link>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={() => navigate("/")}> Cancel </button>
                        <button type="submit"> Register Now </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;
