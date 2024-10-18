import React, { useContext, useEffect, useState } from 'react';
import ADMnav from './component/ADMnav';
import ClientContext from '../pages/context/clientcon';

function ADMOrders(props) {
    const [orders, setOrders] = useState([])

    const host = "http://localhost:2000";

    const contxt = useContext(ClientContext)
    const { fetchorder } = contxt;

    const getOrderss = async () => {
        const data = await fetchorder();
        setOrders(data);
    }

    const delOrder = async(e) =>{
        const id = e.target.id
        const response = await fetch(`${host}/orders/delorder/:${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json();
        if (response) {
            alert(json)
        }
    }

    useEffect(() => {
        getOrderss();
    }, [])


    return (
        <div>

            <ADMnav />
            <section id="cart" class="section-p1">
                <table align='center' className='table table-striped'>
                    <thead className='tableHead'>
                        <tr>
                            <td align='center'> Customer</td>
                            <td align='center'> Address</td>
                            <td align='center'> Contact</td>
                            <td align='center'> Product</td>
                            <td align='center'> Quant.</td>
                            <td align='center'> Manage</td>
                        </tr>
                    </thead>
                    <tbody className='table-Body'>
                        {
                            orders.map((elem) => {
                                console.log(elem)
                                return (
                                    <tr>
                                        <td align='center'>{elem.customerName}</td>
                                        <td align='center'>{elem.customerAddress}</td>
                                        <td align='center'>{elem.customerContact}</td>
                                        <td align='center'>{elem.orderprod}</td>
                                        <td align='center'>{elem.quantity}</td>
                                        <td align='center'><select className='editOrder'>
                                            <option>Edit</option>
                                            <option>Shipped</option>
                                            <option>On the Way</option>
                                            <option>Delivered</option>
                                            <option><button id='elem._id' onClick={delOrder}>Cancelled</button></option>
                                        </select></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table >
            </section >
        </div>
    );
}

export default ADMOrders;