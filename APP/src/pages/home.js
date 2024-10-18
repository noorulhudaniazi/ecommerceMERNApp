import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/hero';
import Feature from '../components/feature';
import ProdSect from '../components/prodSect';
import SmallBanner from '../components/smallBanner';
import Navbr from '../components/navbr';

function Home(props) {

   return (
      <div>
         <Navbr />
         <Hero />
         <Feature />
         <ProdSect head="Featured Products" desc="Summer Collection New Morden Design" />
         <section id="banner" className="section-m1">

            <h4>Repair Services</h4>
            <h2>Up to <span>70% Off</span> All t-Shirts & Accessories</h2>
            <button className="normal">Explore More</button>

         </section>
         <ProdSect head="New Arrivals" desc="Summer Collection New Morden Design" />
         <SmallBanner />
         <Footer />
      </div>
   );
}

export default Home;