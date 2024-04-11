
// import React, { useEffect, useState } from 'react';
// import "./Profile1.css";
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { doc, setDoc } from 'firebase/firestore';
// import { storage, db } from './firebase-config';
// import { Link } from 'react-router-dom';

// const Profile1 = (user) => {
//     const [PTLPUrl, setPTLPUrl] = useState(localStorage.getItem('PTLPUrl') || "images/avatar1.jpg");
//     const [PT, setPT] = useState("");
//     const [PD, setPD] = useState("");
//     const [PP, setPP] = useState(null);
//     const [PPdf, setPPdf] = useState(null);
//     const [PMN, setPMN] = useState("");
//     const [PTLP, setPTLP] = useState(null);
//     const  [PTLN, setPTLN ] = useState("");
//     const [email] = useState(user?.email);

//     {console.log("user " , user)}
//     useEffect(() => {
//         // Store the profile picture URL in localStorage
//         localStorage.setItem('PTLPUrl', PTLPUrl);
//     }, [PTLPUrl]);
//     useEffect(() =>{
//         localStorage.setItem('PTLN',PTLN);
//     }, [PTLN]);
//     useEffect(() =>{
//         localStorage.setItem('email',user?.email);
//     }, [user?.email]);

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const submitBtn = document.getElementsByClassName("submit-btn");
//         if (onSubmit) {
//             submitBtn[0].disabled = true;
//             submitBtn[0].style.cursor = 'no-drop';
//         }

//         // Upload Driving License Image
//         if (PP) {
//             const PPRef = ref(storage, `${email}/pp.jpg`);
//             try {
//                 await uploadBytes(PPRef, PP);
//                 // const url = await getDownloadURL(drivingLicenseRef);
//                 // const userDocRef = doc(db, "users", user.id);
//                 // await setDoc(userDocRef, { drivingLicenseUrl: url, drivingLicenseNumber: dlNumber }, { merge: true });
//             } catch (error) {
//                 console.log("Error uploading Project photo:", error.message);
//             }
//         }

//         // Upload Aadhar Card Image
//         if (PPdf) {
//             const PPdfRef = ref(storage, `${email}/ppdf.jpg`);
//             try {
//                 await uploadBytes(PPdfRef, PPdf);
//             } catch (error) {
//                 console.log("Error uploading Project Pdf:", error.message);
//             }
//         }
//         // profilePic image

//         if (PTLP) {
//             const TeamLeaderprofilePicRef = ref(storage, `${email}/teamleaderprofilePic.jpg`);
//             try {
//                 await uploadBytes(TeamLeaderprofilePicRef, PTLP);
//                 const url = await getDownloadURL(TeamLeaderprofilePicRef);
//                 const userDocRef = doc(db, "studentUsers", user.id);
//                 await setDoc(userDocRef, { profilePicUrls: url, ppu: PTLPUrl }, { merge: true });
//                 {console.log("url: ",url)}
//                 {console.log("Project Team Leader Url: ",PTLPUrl)}
//                 setPTLPUrl(url); // Set the profile picture URL
//             } catch (error) {
//                 console.log("Error uploading Team Leader Url::", error.message);
//             }
//         }

//         // Store text data in Firestore
//         try {
//             const userDocRef = doc(db, "studentUsers", user.id);
//             await setDoc(userDocRef, { PP, PPdf, PTLP }, { merge: true });
//             console.log("Text data stored in Firestore.");
//             alert("Data is successfully submitted");
//         } catch (error) {
//             console.log("Error storing text data in Firestore:", error.message);
//         }

//         alert("Data successfully stored in Database");
//     }

//     return (
//         <div >
//             <h1 className='profile1-h1'>Hi {user?.name}</h1>
//             <div className="profile1-container">
//                 <div className='profile1'>
//                     <div className='profile1-details' >
//                         <div className='profile1-img'>
//                             <img id='avtar' src={PTLPUrl} alt='' />
//                             <br />

//                         </div>
//                         <div className='profile-details-default'>
//                             {/* <p>Name: {user?.name.toLowerCase()}</p> */}
//                             <p>Name: {user?.name}</p>
//                             <p>Email: {user?.email}</p>
//                             <p>college: {user?.college} </p>
//                             <p>Branch: {user?.branch}</p>
//                             <p>mobile: {user?.mobile}</p>
//                             {/* Render other fields from the user object here */}
//                         </div>
//                     </div>
//                     {/* ... rest of your JSX ... */}
//                     <div className='edit-profile'>
//                         <form onSubmit={onSubmit}>
//                             {/* ... your form inputs ... */}
//                             <label>
//                                 <p>Project Title</p>
//                                 <input className='profile1-input input1' type='text' value={PT} onChange={(event) => setPT(event.target.value)} required />
//                             </label>

//                             <label>
//                                 <p>Project Description</p>
//                                 <input className='profile1-input input1' type='text' value={PD} row={5} onChange={(event) => setPD(event.target.value)} required/>
//                             </label>
//                             <label>
//                                 <p>Project Photo</p>
//                                 <input className='profile1-input input1' type='file'  onChange={(event) => setPP(event.target.files[0])} required/>
//                             </label>

//                             <label>
//                                 <p>Project Pdf</p>
//                                 <input className='profile1-input' onChange={(event) => setPPdf(event.target.files[0])} type='file' required />
//                             </label>


//                             <label>
//                                 <p>Project Members Names</p>
//                                 <input className='profile1-input' row={5} onChange={(event) => setPMN(event.target.value)} required/>
//                             </label>

//                             <label>
//                                 <p>Project TeamLeader Name</p>
//                                 <input className='profile1-input input1' type='text' onChange={(event) => setPTLN(event.target.value)} required />
//                             </label>


//                             <label>
//                                 <p>Project Team Leader Photo</p>
//                                 <input className='profile1-input' onChange={(event) => setPTLP(event.target.files[0])} type='file' />
//                             </label>

//                             <button className="submit-btn">Upload</button>


//                         </form>
//                     </div>
//                 </div>
//                <div className='clear'>

//                </div>
//                 {/* <div className='profile1-Link'>
//                     <Link to="/bikerb" className='submit-btns'>Rent Bike</Link>
//                     <Link to="/bikerb" className='submit-btns'>Get Bike</Link>
//                 </div> */}
//             </div>
//         </div>
//     );
// };

// export default Profile1;


import React, { useEffect, useState } from 'react';
import "./Profile1.css";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { storage, db } from './firebase-config';
import { Link, useNavigate } from 'react-router-dom';
const Profile1 = (user) => {
    const [PTLPUrl, setPTLPUrl] = useState(localStorage.getItem('PTLPUrl') || "images1/avatar1.jpg");
    const [PPUrl, setPPUrl] = useState(null);
    const [PPdfUrl, setPPdfUrl] = useState(null);
    const [PT, setPT] = useState("");
    const [PD, setPD] = useState("");
    const [PP, setPP] = useState(null);
    const [PPdf, setPPdf] = useState(null);
    const [PMN, setPMN] = useState("");
    const [PTLP, setPTLP] = useState(null);
    const [PTLN, setPTLN] = useState("");
    const [email] = useState(user.user?.email);
    const navigate = useNavigate();
    // useEffect(() => {
    //     // Store the profile picture URL in localStorage
    //     localStorage.setItem('PTLPUrl', PTLPUrl);
    //     console.log("PTLPURL  : ", PTLPUrl);
    // }, [PTLPUrl]);
    useEffect(() => {
        // Store the profile picture URL in localStorage
        localStorage.setItem('PTLPUrl', PTLPUrl);
        console.log("PTLPURL: ", PTLPUrl);

        // Check if it was stored in localStorage
        const storedPTLPUrl = localStorage.getItem('PTLPUrl');
        console.log("Stored PTLPURL: ", storedPTLPUrl);
    }, [PTLPUrl]);

    useEffect(() => {
        localStorage.setItem('PTLN', PTLN);
    }, [PTLN]);
    useEffect(() => {
        localStorage.setItem('email', user.user?.email);
    }, [user?.email]);

    const onSubmit = async (event) => {
        event.preventDefault();
        const submitBtn = document.getElementsByClassName("submit-btn");
        if (onSubmit) {
            submitBtn[0].disabled = true;
            submitBtn[0].style.cursor = 'no-drop';
        }


        if (PP) {
            const PPRef = ref(storage, `${email}/pp.jpg`);
            try {
                await uploadBytes(PPRef, PP);
                const url = await getDownloadURL(PPRef);
                const userDocRef = doc(db, "studentUsers", user.user.id);
                await setDoc(userDocRef, {  ppref: url }, { merge: true });
                setPPUrl(url);
            } catch (error) {
                console.log("Error uploading Project photo:", error.message);
            }
        }

        if (PPdf) {
            const PPdfRef = ref(storage, `${email}/ppdf.jpg`);
            try {
                await uploadBytes(PPdfRef, PPdf);
                const url = await getDownloadURL(PPdfRef);
                const userDocRef = doc(db, "studentUsers", user.user.id);
                await setDoc(userDocRef, {  PPdfRef: url }, { merge: true });
                setPPdfUrl(url);
                console.log("PPDFURL : ", url);

            } catch (error) {
                console.log("Error uploading Project Pdf:", error.message);
            }
        }
        // profilePic image

        if (PTLP) {
            const TeamLeaderprofilePicRef = ref(storage, `${email}/teamleaderprofilePic.jpg`);
            try {
                await uploadBytes(TeamLeaderprofilePicRef, PTLP);
                const url = await getDownloadURL(TeamLeaderprofilePicRef);
                const userDocRef = doc(db, "studentUsers", user.user.id);
                await setDoc(userDocRef, { profilePicUrls: url, PTLPUrl: PTLPUrl }, { merge: true });
                { console.log("url: ", url) }
                { console.log("Project Team Leader Url: ", PTLPUrl) }
                setPTLPUrl(url); // Set the profile picture URL
            } catch (error) {
                console.log("Error uploading Team Leader Url::", error.message);
            }
        }

        // Store text data in Firestore
        try {
            const userDocRef = doc(db, "studentUsers", user.user.id);
            await setDoc(userDocRef, { PT, PD, PMN, PTLN }, { merge: true });
            console.log("Text data stored in Firestore.");
            alert("Data is successfully submitted");
        } catch (error) {
            console.log("Error storing text data in Firestore:", error.message);
        }

        alert("Data successfully stored in Database");
        navigate("/projects");
    }

    return (
        <div >

            <h1 className='profile1-h1'>Hi {user.user.name}</h1>
            <div className="profile1-container">
                <div className='profile1'>
                    <div className='profile1-details' >
                        <div className='profile1-img'>
                            <img id='avtar' src={PTLPUrl} alt='' />
                            <br />

                        </div>
                        <div className='profile-details-default'>
                            {/* <p>Name: {user?.name.toLowerCase()}</p> */}
                            <p>Name: {user.user?.name}</p>
                            <p>Email: {user.user?.email}</p>
                            <p>college: {user.user?.college} </p>
                            <p>Branch: {user.user?.branch}</p>
                            <p>mobile: {user.user?.mobile}</p>
                            {/* Render other fields from the user object here */}
                        </div>
                    </div>
                    {/* ... rest of your JSX ... */}
                    <div className='edit-profile'>
                        <form onSubmit={onSubmit}>
                            {/* ... your form inputs ... */}
                            <label>
                                <p>Project Title</p>
                                <input className='profile1-input input1' type='text' value={PT} onChange={(event) => setPT(event.target.value)} required />
                            </label>

                            <label>
                                <p>Project Description</p>
                                <textarea className='profile1-textarea' type='text' rows={6} value={PD} row={5} onChange={(event) => setPD(event.target.value)} required />
                            </label>
                            <label>
                                <p>Project Photo</p>
                                <input className='profile1-input input1' type='file' onChange={(event) => setPP(event.target.files[0])} required />
                            </label>

                            <label>
                                <p>Project Pdf</p>
                                <input className='profile1-input' onChange={(event) => setPPdf(event.target.files[0])} type='file' required />
                            </label>


                            <label>
                                <p>Project Members Names</p>
                                <textarea type="textarea"  className='profile1-textarea' rows={6} cols={30}  onChange={(event) => setPMN(event.target.value)} required />
                            </label>

                            <label>
                                <p>Project TeamLeader Name</p>
                                <input className='profile1-input input1' type='text' onChange={(event) => setPTLN(event.target.value)} required />
                            </label>


                            <label>
                                <p>Project Team Leader Photo</p>
                                <input className='profile1-input' onChange={(event) => setPTLP(event.target.files[0])} type='file' />
                            </label>

                            <button className="submit-btn">Upload</button>



                        </form>
                    </div>

                </div>
                <div className='clear'>

                </div>
                {/* <div className='profile1-Link'>
                    <Link to="/bikerb" className='submit-btns'>Rent Bike</Link>
                    <Link to="/bikerb" className='submit-btns'>Get Bike</Link>
                </div> */}
                <div className='btn-align'>
                    <button className='submit-btn' onClick={() => (
                        navigate("/projects")
                    )}>Explore Projects</button>
                </div>
            </div>
        </div>

    );
};

export default Profile1;
