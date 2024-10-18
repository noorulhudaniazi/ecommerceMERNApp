import React, { useContext, useState, useEffect } from 'react';
import Navbr from '../components/navbr';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ProductContext from './prodcontext/ProdCon';
import CnfrmOrder from '../components/cnfrmOrder';



function Cart(props) {

    const [prodObjs, setProdObjs] = useState([]);
    const [cnfrmDiv, setcnfrmDiv] = useState('disp_none');
    const [propID, setPropID] = useState('');
    const [propName, setPropName] = useState('');
    const [propPrice, setPropPrice] = useState('');
    


    const prodCont = useContext(ProductContext);
    const { cartobjs, delCartProd } = prodCont;




    const proceedOrder = async (e) => {
        setPropID(e.target.id)
        setPropName(e.target.name)
        setPropPrice(e.target.value)
        setcnfrmDiv('outerCnfrm')
    }

    const fetchCart = async () => {
        const data = await cartobjs();
        setProdObjs(data);
        // console.log(data)
    }

    useEffect(() => {
        fetchCart()
    }, []);




    let totPrice = 0;
    let getPrice = 0;
    let shipCost = 0

    return (
        <div>
            <Navbr />
            <section id="page-header" className="about-header">

                <h2>#let's_talk</h2>
                <p>LEAVE A MESSAGE, We love to hear from you!</p>

            </section>
            <section id="cart" className="section-p1">
                <table align='center' className='table table-striped'>
                    <thead className='tableHead'>
                        <tr align='center'>
                            <td> Remove</td>
                            <td> Image</td>
                            <td> Product</td>
                            <td> Price</td>
                            {/* <td> Quantity</td> */}
                            <td> Subtotal</td>
                            <td>Proceed</td>
                        </tr>
                    </thead>
                    <tbody className='table-Body'>
                        {
                            prodObjs.map((elem) => {
                                const id = elem._id
                                const name = elem.title
                                const price = elem.price
                                const pic = elem.images[0]

                                const delProd = async () => {
                                    const confrm = window.confirm("Are you Want To delete this product?")
                                    if (confrm) {
                                        await delCartProd(id)
                                    }
                                }
                                totPrice = totPrice + elem.price
                                getPrice = totPrice.toFixed(1)
                                return (
                                    <tr align='center' key={elem.id}>
                                        <td><a href="#"><FontAwesomeIcon onClick={delProd} icon={faTrash} /></a></td>
                                        <td><img height="80px" src={`http://localhost:2000/${pic}`} alt="Image Not Available" /></td>
                                        <td>{name}</td>
                                        <td>${price}</td>
                                        {/* <td><input type="number" /></td> */}
                                        <td>${price}</td>
                                        <td><button id={id} img={elem.images[0]} name={name} value={price} onClick={proceedOrder} className='normal'>Proceed</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table >
            </section >
            <section id="cart-add" className="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Eter Your Coupon" />
                        <button className="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>${getPrice}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>{shipCost}</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${getPrice + shipCost}</strong></td>
                        </tr>
                    </table>
                    <button className="normal">Proceed to checkout</button>
                </div>
            </section>
            <div className={cnfrmDiv}>
                <CnfrmOrder id={propID} name={propName} pricing={propPrice} setcnfrmDiv={setcnfrmDiv} />
            </div>
            <Footer />

        </div >
    );
}

export default Cart;