import React, { useEffect, useState } from 'react';
import { db } from './firebase-config'; // Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore';
import Loading from "./Loading";
import { Link } from 'react-router-dom';
import "./Projects.css";

const Projects = () => {
  const [studentUsers, setStudentUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudentUsers = async () => {
      try {
        const studentUsersRef = collection(db, 'studentUsers');
        const snapshot = await getDocs(studentUsersRef);

        const studentUserList = [];
        snapshot.forEach((doc) => {
          studentUserList.push({ id: doc.id, ...doc.data() });
        });

        setStudentUsers(studentUserList);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching student users:', error);
      }
    };

    fetchStudentUsers();
  }, []);

  return (
    <div>
      <h2 className='h2'>Student Project Lists</h2>
      {isLoading ? (
        <p><Loading /></p>
      ) : (
        <ul>
          <div className='projects-container'>
          {studentUsers.map((user) => (
            // <li key={user.id}>
            //   <strong>ID:</strong> {user.id} <br />
            //   <strong>Name:</strong> {user.name} <br />
            //   <strong>Email:</strong> {user.email} <br />
            //   <strong>College:</strong> {user.college} <br />
            //   {/* Add additional fields as needed */}
            // </li>
            
              <div className='projects-body'>
                <div className='projects-img'>
                  <img width={"300px"} src={user.ppref} alt='Project PIC' />
                </div>
                <div key={user.id} className='projects-content'>
                  <h3>ProjectTitle : {user.PT }</h3>
                  <h3>ProjectDescription : {user.PD }</h3>
                  <p>Name : {user.name }</p>
                  <p>Email : {user.email }</p>
                  <p>College : {user.college }</p>
                  <p>Branch : {user.branch}</p>
                  <p>TeamLeader : {user.PTLN }</p>
                  <p>TeamMembers : {user.PMN }</p>
                  <br />
                  <Link className='projects-btn' to={user.PPdfRef} > Learn More</Link>
                </div>
                
              </div>
            
          ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Projects;
