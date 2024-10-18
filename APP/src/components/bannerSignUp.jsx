import React from 'react';
import {Link} from 'react-router-dom';


function BannerSignUp(props) {
    return (
        <div>
            <section id="newsletter" className="section-p1 section-m1">

                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>

                <div className="form">
                    <input type="text" placeholder="Your email address" />
                    <Link to='/signup'><button className="normal">Sign Up</button></Link>
                </div>

            </section>
        </div>
    );
}

export default BannerSignUp;