import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbr from '../components/navbr';




function AdminLogin(props) {
    const host = "http://localhost:2000";

    const navigate = useNavigate();
    const [cred, setcred] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setcred({ ...cred, [e.target.name]: e.target.value })
    }


    const submit = async (e) => {
        e.preventDefault();
        const loginhandler = async () => {
            const response = await fetch(`${host}/adminportal/authenticateadmin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cred)
            });
            const json = await response.json();
            if (response) {
                // console.log(json)
                return json
            } else {
                return ("Server Not Responding")
            }
        }

        const result = await loginhandler();
        // console.log(result)
        if (result.success) {
            localStorage.setItem("auth_token", result.auth_token)
            localStorage.setItem("success", "loginadminsuccessfully")
            localStorage.setItem("byteadminwithweb", true)
            alert("Logged In Successfully")
            navigate("/")
        }
        else {
            alert("Invalid Credentials")
        }
    }




    return (
        <div>
            <Navbr />
            <div className='formSectSignIn'>
                <div className='signInBox'>
                    <h2 className='regH2'>SignIn</h2>
                    <div className='bodySignUp'>
                        <form className='formSignup' onSubmit={submit}>
                            <div className='formDiv'>
                                <div className='inputDiv'>
                                    <label htmlFor="addresSignUp">Email:</label>
                                    <input type="email" className="inputSignUp" placeholder="Enter Email" name='email' onChange={handleChange} required={true} /><br />
                                </div>
                                <div className='inputDiv'>
                                    <label htmlFor="passwordSignUp">Password:</label>
                                    <input type='password' className='inputSignUp' id='passSignUp' name="password" placeholder="" onChange={handleChange} required />
                                </div>
                                <div className='buttonDiv'>
                                    <input type='submit' className='submitSignUp' id='submitSignUp' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLogin;