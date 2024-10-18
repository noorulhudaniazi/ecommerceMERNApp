import React from 'react';
import imgg from '../Sources/img/products/f1.jpg'

function Prodcard(props) {


    return (
        <div className="pro">
            <img  src={props.image} alt="" style={{objectFit: "contain"}} />
                <div className="des">
                    <span>{props.brand}</span>
                    <h5>{props.name}</h5>
                    <h4>${props.price}</h4>
                </div>
                <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
        </div>
    );
}
Prodcard.defaultProps = {
    image: imgg,
    price: "200",
    name: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
}


export default Prodcard;