import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Spinner = () => {
    return (
        <div className="flex items-center flex-col">
            <div className="loader__green"></div>

            <span className="text-white text-2xl mt-4"> Loading... </span>
        </div>
    );
};

const Welcome = () => {

    // Hooks
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "" });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (!token || !userData) {
            navigate("/login"); // Redirect to the login page if no token is found
        } else {
            try {
                // With Set time out
                setTimeout(() => {
                    setLoading(false);
                    setUser(JSON.parse(userData));
                }, 4000);

                // No Set time out
                // setLoading(false);
                // setUser(JSON.parse(userData));
            } catch (error) {
                console.error("Error to load date from user.", error);
                navigate("/login");
            }
        }
    }, [navigate]);

    // If loading
    if (loading) return <Spinner />;

    // Deleting account
    if (deleting) {
        return (
            <div className="flex items-center flex-col">
                <div class="loader__red"></div>
                <span className="text-white mt-4"> Deleting your account... </span>
            </div>
        );
    }

    // Logout
    const handleDeleteAccount = async () => {
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");
    
        // alert("You have logged out, you can log in again.");
        // navigate("/login");

        const token = localStorage.getItem("token");
        if (!token) {
            alert("User not found.");
            navigate("/login");
            return;
        }

        // Activate Spinner
        setDeleting(true);

        try {
            await axios.delete("http://localhost:3000/api/auth/deleteAccount", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            localStorage.clear();
            setTimeout(() => {
                setDeleting(false);
                navigate("/login");
            }, 4000);
        } catch (error) {
            console.error("Error to delete your account: ", error);
            alert("Error to delete account. Try again.");
            setDeleting(false); // Deactivate spinner
        }
    }

    return (
        <div className="user-information w-[500px] mt-10 p-6 rounded-lg">
            <h2 className="text-2xl text-gray-300 font-bold mb-4"> Welcome, {user.name}! </h2>
            <p className="text-gray-100 mb-2"> Email: <span className="font-medium"> {user.email} </span> </p>
            <p className="text-gray-200 mb-6"> You are logged in a protected route. </p>

            {/* Button to logout account */}
            <div className="flex items-center justify-between m-4">
                <button className="bg-[#FFF2D7] text-black font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => navigate("/login")}>
                    Back to Login
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded cursor-pointer" onClick={handleDeleteAccount}>
                    Delete Account
                </button>
            </div>
        </div>
    );
}

export default Welcome;