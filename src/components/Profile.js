
import { React, useEffect, useState } from 'react';
import { db, auth  } from "./firebase-config";
import { collection, getDocs, query, where } from 'firebase/firestore';
import Profile1 from './Profile1.js';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Loading from './Loading';

const Profile = () => {
    const currentUser = auth.currentUser;
    const userIdentifier = currentUser ? currentUser.email : null;
    const [usersData, setUsersData] = useState([]);
    const navigate = useNavigate(); 
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            setUser(authUser);
          } else {
            // User is not authenticated, redirect to login
            navigate('/signin'); // Replace with your login route
          }
        });
    
        return () => {
          unsubscribe(); // Cleanup when the component unmounts
        };
      }, [navigate]);
  
    useEffect(() => {
        if (!userIdentifier) {
            alert("Please Login, Later explore the application.");
            navigate("/signin");
        } else {
            const colRef = collection(db, "studentUsers");
            const q = query(colRef, where("email", "==", userIdentifier));

            getDocs(q)
                .then((snapshot) => {
                    const data = [];
                    snapshot.docs.forEach((doc) => {
                        data.push({ ...doc.data(), id: doc.id });
                    });
                    setUsersData(data);
                    setIsLoading(false);
                    console.log("usersData  : ", usersData)
                })
                .catch(error => {
                    console.log(error.message);
                    setIsLoading(false);
                });
        }
    }, [userIdentifier]);

    return (
        <div className='profile-container'>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    {usersData.map((user, index) => (
                        <Profile1 key={index} user={user} />
                    ))}
                </div>
               
            )}
        </div>
    );
};

export default Profile;
