import React, {useContext} from 'react';
import image01 from '../Sources/img/products/f1.jpg'
import image02 from '../Sources/img/products/f2.jpg'
import image03 from '../Sources/img/products/f3.jpg'
import image04 from '../Sources/img/products/f4.jpg'
import image05 from '../Sources/img/products/f5.jpg'
import ProductContext from '../pages/prodcontext/ProdCon';


function OpenedProd(props) {

    const host = "http://localhost:2000/";


    const context = useContext(ProductContext)
    const { addtocart } = context


    const pushCart = () => {
            addtocart(props.id)
            alert("Item Added to cart")
    }




    return (
        <section id="pro-details" className="section-p1">

            <div className="single-pro-image">
                <div className='single-pro-img'>
                    <img src={`${host}${props.image[0]}`} alt="" width="100%" id="MainImg" />

                </div>

                <div className="small-img-group">
                    {
                        props.image.map((element) => {
                            return (
                                <div className="small-image-col">
                                    <img src={`${host}${element}`} alt="" width="100%" className="small-img" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="single-pro-details">
                <h6>{props.brand}</h6>
                <h4>{props.name}</h4>
                <h2>${props.price}</h2>
                <select name="" id="">
                    <option>Slect Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <input type="number" />
                <button className="normal" onClick={pushCart}>Add To Cart</button>
                <h4>Product Details</h4>
                <span>{props.details}</span>
            </div>

        </section>
    );
}


OpenedProd.defaultProps = {
    image: [image01, image02, image03, image04, image05],
    price: "200",
    name: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
    details: "The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 0z. per sq. yd. fabric constructed from 100% cotton, this classNameic fit preshrunk jersey knit provides unmatched comfort which each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
}

export default OpenedProd;