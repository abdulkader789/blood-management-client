import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // State to store validation errors
    const [errors, setErrors] = useState({});

    // Function to validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate email on input change
        if (name === "email") {
            setErrors((prevErrors) => ({ ...prevErrors, email: !validateEmail(value) }));
        }
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Check if there are validation errors
        if (Object.values(errors).some((error) => error)) {
            console.error("Invalid form submission. Please fix the errors.");
            return;
        }

        try {
            // Make a POST request to the /register endpoint
            const response = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Check if the registration was successful
            if (response.ok) {
                console.log("User registered successfully!");
                alert("User registered successfully!");
                // Redirect or perform any other action after successful registration
                navigate('/login');
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div className=" flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded shadow-lg">
                <h2 className="text-3xl font-semibold text-center">Register</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${errors.email ? "border-red-500" : ""
                                }`}
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">Invalid email format</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 bg-indigo-600 text-white rounded-md"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
