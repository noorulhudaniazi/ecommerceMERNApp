import React from 'react';
import Footer from '../components/Footer';
import Navbr from '../components/navbr';
import image from '../Sources/img/people/A11.png'


function Cantact(props) {
    return (
        <div>
            <Navbr />
            <section id="page-header" class="about-header">

                <h2>#let's_talk</h2>
                <p>LEAVE A MESSAGE, We love to hear from you!</p>

            </section>
            <section id="contact-details" class="section-p1">
                <div class="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency location or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>
                            <li class="fal fa-map-marker"></li>
                            <p>56 Street Mianwali Pakistan</p>
                        </li>
                        <li>
                            <li class="fal fa-email"></li>
                            <p>sohailkhanrokhri012@gmail.com</p>
                        </li>
                        <li>
                            <li class="fal fa-map"></li>
                            <p>zhk67416@gmail.com</p>
                        </li>
                        <li>
                            <li class="fal fa-map"></li>
                            <p>malikhumair6976@gmail.com</p>
                        </li>
                    </div>
                </div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.4162067007424!2d71.55487777474556!3d32.5950899932627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392717f50b2168a9%3A0xb7282e394b237e3a!2sUniversity%20of%20Mianwali!5e0!3m2!1sen!2s!4v1707800122182!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </section>
            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button class="normal">Submit</button>
                </form>
                <div class="people">
                    <div>
                        <img class="user_image" src={image} alt="user_1" />
                        <p><span><strong >M Sohail Khan</strong></span>Senior Marketing Manager<br />Phone: +923126099293<br />Email: sohailkhanrokhri012@gmail.com</p>
                    </div>
                    <div>
                        <img class="user_image" src={image} alt="user_2" />
                        <p><span><strong>Imran Haider Khan</strong> </span>Senior Marketing Manager<br />Phone: +923219745546<br />Email: imran@gmail.com</p>
                    </div>
                    <div>
                        <img class="user_image" src={image} alt="user_3" />
                        <p><span><strong>Muhammad Humair Hayat</strong></span>Senior Marketing Manager<br />Phone: +923110549388<br />Email: muhammadhumairhayat@gmail.com</p>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}

export default Cantact;