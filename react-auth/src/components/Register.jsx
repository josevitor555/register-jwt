import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

    // Hooks
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Functions
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Register(name, email, password);
            navigate("/login"); // Redirect to the login page after successful registration
        } catch (error) {
            alert("Registration failed. Please try again.");
        }
    }

    return (
        <div className="container">
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
                        type="passord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                </div>


                <div className="container-buttons">
                    <a href="#">
                        <Link to="/login"> Already have an account? </Link>
                    </a>
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
