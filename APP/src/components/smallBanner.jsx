import React from 'react';
import BannerSignUp from './bannerSignUp';

function SmallBanner(props) {
    return (
        <div>
            <section id="sm-banner" className="section-p1">

                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Learn More</button>
                </div>

                <div className="banner-box banner-box2">
                    <h4>soring/summer</h4>
                    <h2>upcomming season</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Collection</button>
                </div>

            </section>
            <section id="banner-3">

                <div className="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>

                <div className="banner-box banner-box-2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2022</h3>
                </div>

                <div className="banner-box banner-box-3">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>

            </section>
           <BannerSignUp />
        </div>
    );
}

export default SmallBanner;