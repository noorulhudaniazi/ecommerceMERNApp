import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientContext from '../context/clientcon';
import Navbr from '../../components/navbr';
import Footer from '../../components/Footer';
import './signs.css'



function SignIn(props) {

    const navigate = useNavigate();
    const context = useContext(ClientContext)
    const { fetchdata } = context;
    const [cred, setcred] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setcred({ ...cred, [e.target.name]: e.target.value })
    }


    const submit = async (e) => {
        e.preventDefault();
        const result = await fetchdata(cred);
        if(result.status===200){
            alert("Sign Up Is successfull")
            navigate("/")
        } else if (result.status===400){
            alert(result.message)
        } else {
            alert(result.message)
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
                                    <label htmlFor="addresSignUp">Username:</label>
                                    <input type='text' className='inputSignUp' id='userSignUp' name="email" placeholder="" onChange={handleChange} required />
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

export default SignIn;