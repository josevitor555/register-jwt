import { useState } from "react"
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
            const token = await login(email, password);
            localStorage.setItem("token", token); // Store the token in local storage
            navigate("/welcome"); // Redirect to the home page after successful login
        } catch (error) {
            alert("Login failed. Please try again.");
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
                
                <button type="submit"> Enter </button>
            </form>
        </div>
    )
}

export default Login;
