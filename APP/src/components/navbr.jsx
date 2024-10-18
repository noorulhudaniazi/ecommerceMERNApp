import React, { useEffect, useState } from 'react';
import '../Sources/style.css'
import logoImg from '../Sources/img/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function Navbr(props) {
    const [classnamme, setClassNamme] = useState("")
    const currentPath = window.location.pathname;

    const success = localStorage.getItem("success")
    useEffect(() => {
        if (success === "loginlogin" || success === "loginadminsuccessfully"){
            setClassNamme("disp_none")
       }
      }, []);

      const clearSession = () =>{
        localStorage.clear();
      }
    


    return (
        <div>
            <section id="header">

                <a href="#"><img src={logoImg} alt="" className="logo" /></a>

                <div>
                    <ul id="navbar">
                        <li><Link className= { currentPath==="/" ? "active" : ""} to="/">Home</Link></li>
                        <li><Link className= { currentPath==="/product" ? "active" : ""} to="/product">Shop</Link></li>
                        <li><Link className= { currentPath==="/about" ? "active" : ""} to="/about">About</Link></li>
                        <li className= { classnamme==="disp_none" ? "" : "disp_none"} onClick={clearSession}><Link to={'/'} onClick={(e) => { e.preventDefault(); window.location.assign(`/`)}}>Sign Out</Link></li>
                        <li className= { currentPath==="/signin" ? "active" : classnamme}><Link to="/signin">Sign In</Link></li>
                        <li className= { currentPath==="/signup" ? "active" : classnamme}><Link to="/signup">Sign Up</Link></li>
                        <li className= { classnamme==="disp_none" ? "" : "disp_none"} id="lg-bag"><Link className= { currentPath==="/cart" ? "active" : ""} to="/cart"><h3><FontAwesomeIcon icon={faCartShopping} /></h3></Link></li>
                        <a href="#" id="close"><i className="far fa-times"></i></a>
                    </ul>
                </div>
                

                <div id="mobile">
                    <a href="cart.html"><i className="fal fa-shopping-bag"></i></a>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>

            </section>
        </div>
    );
}

export default Navbr;