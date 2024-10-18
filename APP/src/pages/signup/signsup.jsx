import React, { useState, useContext } from 'react';
import ClientContext from '../context/clientcon';
import { useNavigate } from 'react-router';
import './signs.css'
import Navbr from '../../components/navbr';
import Footer from '../../components/Footer';

function Signsup(props) {

    const { addUser } = useContext(ClientContext);
    const navigate = useNavigate();

    const signup = async(e) => {
        e.preventDefault();
        const response = await addUser(User);
        if(response){
            alert("Sign Up Is successfull")
            navigate("/")
        } else if (response.status===400){
            alert("User Already Exist")
        } else {
            alert("Internal Server Error")
        }
    }

    const [User, setUser] = useState({ name: "", username: "", email: "", contact: "", address: "", password: "", });

    const enterData = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Navbr />
            <div className='formSectSignUp'>
                <h2 className='regH2'>Registration</h2>
                <div className='bodySignUp'>
                    <form className='formSignup' onSubmit={signup}>
                        <div className='formDiv01'>
                            <div className='formDiv'>
                                <div className='inputDiv'>
                                    <label htmlFor="nameSignUp">Name:</label>
                                    <input type='text' className='inputSignUp' id='nameSignUp'  name="name" placeholder="" onChange={enterData} required/>
                                </div>
                                <div className='inputDiv'>
                                    <label htmlFor="addresSignUp">Username:</label>
                                    <input type='text' className='inputSignUp' id='userSignUp'  name="username" placeholder="" onChange={enterData} required/>
                                </div>
                                <div className='inputDiv'>
                                    <label htmlFor="emailSignUp">Email:</label>
                                    <input type='email' className='inputSignUp' id='emailSignUp'  name="email" placeholder="" onChange={enterData} required/>
                                </div>
                            </div>
                            <div className='formDiv'>
                                <div className='inputDiv'>
                                    <label htmlFor="contactSignUp">Contact:</label>
                                    <input type='number' className='inputSignUp' id='contactSignUp'  name="contact" placeholder="" onChange={enterData} required/>
                                </div>
                                <div className='inputDiv'>
                                    <label htmlFor="addresSignUp">Address:</label>
                                    <input type='text' className='inputSignUp' id='addresSignUp'  name="address" placeholder="" onChange={enterData} required/>
                                </div>
                                <div className='inputDiv'>
                                    <label htmlFor="passwordSignUp">Password:</label>
                                    <input type='password' className='inputSignUp' id='passSignUp'  name="password" placeholder="" onChange={enterData} required/>
                                </div>
                            </div>
                        </div>
                        <div className='inputDivOut'>
                            <label htmlFor="confirmSignUp">Confirm Password:</label>
                            <input type='text' className='inputSignUp' id='confirmSignUp' />
                        </div>
                        <div className='buttonDiv'>
                            <input type='submit' className='submitSignUp' id='submitSignUp' />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signsup;