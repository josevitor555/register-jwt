import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Welcome = () => {

    // Hooks
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "" });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (!token || !userData) {
            navigate("/login"); // Redirect to the login page if no token is found
        } else {
            try {
                setUser(JSON.parse(userData)); // Parse to JavaScript Object
            } catch (error) {
                console.error("Error to load date from user.");
                navigate("/login");
            }
        }
    }, [navigate]);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    
        alert("You are logout!");
        navigate("/login");
    }

    return (
        <div className="user-information max-w-md mx-auto mt-10 p-6 rounded-lg">
            <h2 className="text-2xl text-gray-300 font-bold mb-4"> Welcome, {user.name} 👋</h2>
            <p className="text-gray-100 mb-2"> Email: <span className="font-medium"> {user.email} </span> </p>
            <p className="text-gray-200 mb-6"> You are logged in a protected route. </p>

            {/* Button to logout account */}
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Welcome;
