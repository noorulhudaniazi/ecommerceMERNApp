import React from 'react';
import { Link } from 'react-router-dom';
import '../Sources/style.css'
import logoImg from '../Sources/img/logo.png'
import appImg from '../Sources/img/pay/app.jpg'
import payImg from '../Sources/img/pay/pay.png'
import playImg from '../Sources/img/pay/play.jpg'

function Footer(props) {


    
    return (
        <div>
            <footer className="section-p1">

                <div className="footerSect">
                    <img className="logo" src={logoImg} alt="" />
                        <h4>Contact</h4>
                        <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
                        <p><strong>Phone: </strong> +92 3126099293 / +923219745546</p>
                        <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
                        <div className="follow">
                            <h4>Follow us</h4>
                            <div className="icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-pinterest-p"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                </div>

                <div className="footerSect">
                    <h4>About</h4>
                    <Link to="/about">About us</Link>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <Link to="/contactUs">Contact Us</Link>
                </div>

                <div className="footerSect">
                    <h4>My Account</h4>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">View Cart</Link>
                    <a href="#">Help</a>
                </div>

                <div className="col install">
                    <h4>Install App</h4>
                    <p>Form App Store or Google Play</p>
                    <div className="row">
                        <img src={appImg} alt="" />
                        <img src={playImg} alt="" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src={payImg} alt="" />
                </div>



            </footer>
        </div>
    );
}

export default Footer;