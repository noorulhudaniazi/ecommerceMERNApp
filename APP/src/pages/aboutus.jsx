import React from 'react';
import Navbr from '../components/navbr';
import Footer from '../components/Footer';
import SmallBanner from '../components/smallBanner';
import imagee from '../Sources/img/banner/b6.jpg';

function Aboutus(props) {
    return (
        <div>
            <Navbr />
            <section id="page-header" className="about-header">

                <h2>#KnowUs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>

            </section>

            <section id="about-head" className="section-p1">
                <img src={imagee} alt="" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alique.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <abbr title="">Creat stuning imageswith as much or as little control as you like thanks to a
                        choice of Basic and Creative modes. </abbr>
                    <br /><br />


                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Creat stuning imageswith as much or as little control as you like thanks to a
                        choice of Basic and Creative modes.
                    </marquee>
                </div>
            </section>
            <SmallBanner/>
            <Footer />
        </div>
    );
}

export default Aboutus;