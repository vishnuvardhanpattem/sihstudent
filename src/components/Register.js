import { React, useState } from "react";
import "./Register.css";
import { db, auth } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState();
    const [college, setCollege] = useState();
    const [branch, setBranch] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const userCollectionRef = collection(db, "studentUsers");
    const onSubmit = (event) => {
        event.preventDefault();
        try {
            addDoc(userCollectionRef, { name: name, college: college,branch:branch, mobile: mobile, email: email, password: password });
            const user = createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successfully");

        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }

    };
    return (
        <div className="container">
            <div className="container-space"></div>
            <div className="container-form">

                <form onSubmit={onSubmit} >
                    <h1 className="container-h1">SIGNUP</h1>
                    <label>
                        <p>Name </p><input type="text" autoComplete="given-name" placeholder="FullName" onChange={(event) => {
                            setName((event.target.value).toUpperCase())
                        }} required />
                    </label>
                    <label>
                        <p>CollegeName </p><input type="text"  onChange={(event) => {
                            setCollege(event.target.value)
                        }} required />
                    </label>
                    <label>
                        <p>Branch </p><input type="text"  onChange={(event) => {
                            setBranch(event.target.value)
                        }} required />
                    </label>
                    <label>
                        <p>Mobile</p> <input type="text" minLength={10} maxLength={10} onChange={(event) => {
                            setMobile(event.target.value)
                        }} required />
                    </label>

                    <label>
                        <p>Email</p> <input type="email" onChange={(event) => {
                            setEmail(event.target.value)
                        }} required />
                    </label>
                    <label>
                        <p>Password</p> <input type="password" autoComplete="current-password" onChange={(event) => {
                            setPassword(event.target.value)
                        }} required />
                    </label>
                    <div className="container-btns">
                        <button className="container-btn" >SIGNUP</button>
                        <a className="container-btn" href="/signin">SIGNIN</a>
                    </div>
                </form>
            </div>
        </div>

    )
};

export default Register;