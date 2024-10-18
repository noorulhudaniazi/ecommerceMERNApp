import React from 'react';
import imagess from '../Sources/img/blog/b3.jpg'


function BlogCard(props) {
    return (
        <div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src={imagess} alt="" />
                </div>
                <div className="blog-details">
                    <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
                    <p>Kickstarter man barid gadard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>
        </div>
    );
}

BlogCard.defaultProps = {
    image: imagess,
    price: "200",
    name: "The Cotton-Jersey Zip-Up Hoodie",
    desc: " Kickstarter man barid gadard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
    href: "/",
}

export default BlogCard;