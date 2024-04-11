// import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import "./SignIn.css";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase-config";


// const SignIn = () => {
//     const [user, setUser] = useState({});
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const  navigate = useNavigate();
//     useEffect( () =>{
//         onAuthStateChanged(auth, (currentUser) =>{
//             setUser(currentUser);
//             console.log(currentUser);
//         });
//     },[])
    
//     const onSubmit = async (event) => {
//         // event.preventDefault();
//         event.preventDefault();
        
//         try {
//             const loggedInUser = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//             console.log(user?.email);
//             console.log(loggedInUser);
//             // navigate("/");
//             // Clear input fields
//             setLoginEmail("");
//             setLoginPassword("");
//             alert("Login Sucessfull");
//             navigate("/profile");

//         } catch (error) {
//             console.log(error.message);
//             alert(error.message);
//         }

//     };
//     // const onSubmit =(event) =>{
//     //     event.preventDefault();
//     //     console.log(loginEmail);
//     //     console.log(loginPassword);
//     // }
//     return (
//         <div>

//             <div className="container">
//                 <div className="space"></div>
//                 <div className="container-form">
//                     <h1 className="container-h1" >Signin</h1>
//                     <form onSubmit={onSubmit}>
//                         <label>
//                             <p>Email</p>
//                             <input type="email" onChange={(event) =>{
//                                 setLoginEmail(event.target.value)
//                             }}  />
//                         </label>
//                         <label>
//                             <p>Password</p>
//                             <input type="password" autoComplete="current-password"  onChange={(event) =>{
//                                 setLoginPassword(event.target.value)
//                             }}  />
//                         </label>
//                         <p className="container-p">If you don't have account?<a className="container-link" href='/register'>Signup</a></p>
//                         <button className="container-btn" >SIGNIN</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default SignIn;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import {
  GoogleAuthProvider,
  PhoneAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const SignIn = () => {
  const [user, setUser] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [phoneSignInCode, setPhoneSignInCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      navigate("/profile");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(loggedInUser);
      setLoginEmail("");
      setLoginPassword("");
      alert("Login Successful");
      navigate("/profile");
    } catch (error) {
      console.error("Email/Password Sign-In Error:", error.message);
      alert(error.message);
    }
  };

  const handlePhoneSignIn = async () => {
    const phoneProvider = new PhoneAuthProvider(auth);
    console.log(phoneProvider);
    try {
      await sendSignInLinkToEmail(auth, phoneNumber, {
        url: "http://localhost:3001/", // Replace with your app's URL
        handleCodeInApp: true,
      });
      alert("Sign-in link sent to your email.");
    } catch (error) {
      console.error("Phone Sign-In Error:", error.message);
    }
  };

  const handlePhoneSignInWithCode = async () => {
    try {
      await signInWithEmailLink(auth, loginEmail, phoneSignInCode);
      setLoginEmail("");
      setPhoneSignInCode("");
      alert("Phone Sign-In Successful");
      navigate("/profile");
    } catch (error) {
      console.error("Phone Sign-In Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="space"></div>
        <div className="container-form">
          <h1 className="container-h1">Sign In</h1>
          <form onSubmit={handleEmailSignIn}>
            <label>
              <p>Email</p>
              <input
                type="email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                autoComplete="current-password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
              />
            </label>
            <button className="container-btn">Sign In</button>
          </form>
          <button
            className="container-btn"
            onClick={handleGoogleSignIn}
            style={{ backgroundColor: "#4285F4", color: "white" }}
          >
            Sign In with Google
          </button>
          {/* Phone Sign-In */}
          <label>
            <p>Phone Number</p>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
          <button className="container-btn" onClick={handlePhoneSignIn}>
            Send Sign-In Link
          </button>
          <label>
            <p>Sign-In Code (received in email)</p>
            <input
              type="text"
              value={phoneSignInCode}
              onChange={(event) => setPhoneSignInCode(event.target.value)}
            />
          </label>
          <button
            className="container-btn"
            onClick={handlePhoneSignInWithCode}
          >
            Sign In with Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
