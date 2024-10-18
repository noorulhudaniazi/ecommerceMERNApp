import React from 'react';
import logoImg from '../../Sources/img/logo.png'
import { Link, useNavigate } from 'react-router-dom';



function ADMnav(props) {
    const navigate = useNavigate();

    const handleSignout = () => {
        const confirm = window.confirm("Do You Want To Logout?")
        if (confirm) {
            localStorage.clear()
            navigate('/')
        }
    }
    const currentPath = window.location.pathname;


    return (
        <div>
            <section id="header">

                <a href="#"><img src={logoImg} alt="" className="logo" /></a>

                <div>
                    <ul id="navbar">
                        <li><Link className= { currentPath=="/admproduct" ? "active" : ""} to="/admproduct">Product</Link></li>
                        <li><Link className= { currentPath=="/adlisting" ? "active" : ""} to="/adlisting">Add Prods</Link></li>
                        <li><Link className= { currentPath=="/ordermanage" ? "active" : ""} to="/ordermanage">Orders</Link></li>
                        <li onClick={handleSignout}><Link>Sign Out</Link></li>
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

export default ADMnav;