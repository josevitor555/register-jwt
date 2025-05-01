import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Welcome = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to the login page if no token is found
        } else {
            // Optionally, you can verify the token here
            console.log("Token found:", token);
        }
    }, [navigate]);

    return (
        <div>
            <h2> Welcome to the Dashboard! </h2>
            <p> This is a protected route. You can only see this page if you are logged in.  </p>
        </div>
    )
}

export default Welcome
