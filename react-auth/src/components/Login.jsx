import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {

    // Hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Functions
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send credentials to the server for authentication
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password
            });
            console.log(email, password);

            // Save the token to local storage
            localStorage.setItem('token', response.data.token); // Store the token in local storage

            // Redirect to the home page after successful login
            navigate("/welcome"); // Redirect to the home page
        } catch (error) {
            console.error("Error logging in:", error); // Log the error to the console
            alert("Error logging in. Please try again."); // Show an alert to the user
        }
    }

    return (

        <div className="container">
            <h2> Login Now </h2>
            <form onSubmit={handleSubmit} className="form">
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
                    <div className="m-2">
                        <label className="material-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Remenber me
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={() => navigate("/")}> Cancel </button>
                        <button type="submit"> Login Now </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
