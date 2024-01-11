// AllBloodGroup.jsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AllBloodGroup = () => {
    const [bloodGroups, setBloodGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const { jwtToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBloodGroups = async () => {
            console.log('all blood access', jwtToken)
            try {
                const response = await fetch('/api/allbloodgroup');
                const data = await response.json();

                setBloodGroups(data);

                console.log('data from api', data)
                setLoading(false);
                // console.log('Blood Groups:', bloodGroups);


            } catch (error) {
                console.error('Error fetching blood groups:', error);
                setLoading(false);
            }
        };

        fetchBloodGroups();

    }, []);

    useEffect(() => {
        // Check if the user is authenticated
        if (!jwtToken) {
            // Redirect to the login page
            navigate('/login');
        }
    }, [jwtToken, navigate]);



    return (
        <div>
            <h2>All Blood Groups</h2>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    bloodGroups.length > 0 ? (
                        <ul>
                            {bloodGroups.map((group) => (
                                <li key={group.id}>{group.bloodGroup} {group.location}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No blood groups available.</p>
                    )
                )}
            </div>

        </div>
    );

};

export default AllBloodGroup;
