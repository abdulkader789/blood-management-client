import React, { useState } from 'react';

const AddBlood = () => {
    const [bloodInfo, setBloodInfo] = useState({
        user: '', // Assuming you get the user ID from somewhere
        bloodGroup: '',
        location: '',
        isActive: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBloodInfo((prevInfo) => ({
            ...prevInfo,
            [name]: name === 'isActive' ? e.target.checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Assuming your backend is running on http://localhost:5000
            const response = await fetch('http://localhost:5000/addblood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bloodInfo),
            });

            if (!response.ok) {
                throw new Error('Failed to add blood donation');
            }

            const data = await response.json();

            // Handle success, e.g., show a success message or redirect
            console.log('Blood donation added successfully:', data);
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error('Error adding blood donation:', error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add Blood Donation</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-600">
                        Blood Group
                    </label>
                    <input
                        type="text"
                        id="bloodGroup"
                        name="bloodGroup"
                        value={bloodInfo.bloodGroup}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={bloodInfo.location}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="isActive" className="block text-sm font-medium text-gray-600">
                        Active
                    </label>
                    <select
                        id="isActive"
                        name="isActive"
                        value={bloodInfo.isActive}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    Add Blood Donation
                </button>
            </form>
        </div>
    );
};

export default AddBlood;
