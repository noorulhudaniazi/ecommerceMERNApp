import React, { useContext, useEffect, useState } from 'react';
import ClientContext from '../pages/context/clientcon';




function CnfrmOrder(props) {
    const [clientData, setClientData] = useState({ name: "", contact: "", address: "", zipcode: "", city: "", quantity: "", size: "", prodname: "", prodID: "", price: "", status: "" })
    // { name, contact, address, zipcode, city, quantity, size, prodname, prodID, price, status }

    // id, name, contact, address, zipCode, city, Quantity, size, prodname, prodID, price 
    const orderCon = useContext(ClientContext)
    const { placeorder } = orderCon;




    const newOrder = async () => {
        const data = await placeorder(clientData);
        if (data) {
            alert("Your Order Place Successfully")
        }
    }

    const enterData = (e) => {
        setClientData({ ...clientData, [e.target.name]: e.target.value })
        const name = props.name
        const id = props.id
        const price = props.pricing
        setClientData({ ...clientData, prodname: name })
        setClientData({ ...clientData, prodID: id })
        setClientData({ ...clientData, price: price })
        console.log(clientData)
    }




    return (
        <div className='inerCnfrm'>
            <div className='cnfrmHead'><h3>{props.name}</h3></div>
            <div className='cnfrmMidle'>
                {/* <div className='cnfrmProdDetail'>
                    <img className='cnfrmImage' src={`${host}${props.images[0]}`} alt='Image Not Found' />
                </div> */}
                <form className='cnfrmForm'>
                    <h3>Price: {props.pricing}</h3>
                    <div className='cnfrmFormDiv' >
                        <div className='cnfrmFormDivs'>
                            <label>Name:</label>
                            <input name='name' className='cnfrmIputs' type='text' onChange={enterData} />
                        </div>
                        <div className='cnfrmFormDivs'>
                            <label>Contact:</label>
                            <input name='contact' className='cnfrmIputs' type='text' onChange={enterData} />
                        </div>
                    </div>
                    <div className='cnfrmFormDiv'>
                        <div className='cnfrmFormDivs'>
                            <label>Quantity:</label>
                            <input name='quantity' className='cnfrmIputs' type='number' onChange={enterData} />
                        </div>
                        <div className='cnfrmFormDivs'>
                            <label>Size:</label>
                            <input name='size' className='cnfrmIputs' type='text' onChange={enterData} />
                        </div>
                    </div>
                    <div className='cnfrmFormDiv CnfrmAdres'>
                        <label>Address:</label>
                        <input name='address' className='cnfrmIputs' type='text' onChange={enterData} />
                    </div>
                    <div className='cnfrmFormDiv'>
                        <div className='cnfrmFormDivs'>
                            <label>City:</label>
                            <input name='city' className='cnfrmIputs' type='text' onChange={enterData} />
                        </div>
                        <div className='cnfrmFormDivs'>
                            <label>Zip_Code:</label>
                            <input name='zipcode' className='cnfrmIputs' type='text' onChange={enterData} />
                        </div>
                    </div>
                </form>
            </div>
            <footer className='cnfrmFooter'>
                <button onClick={newOrder} className='normal'>Confirm</button>
                <button onClick={() => props.setcnfrmDiv("disp_none")} className='normal'>Cancel</button>
            </footer>
        </div>
    );
}

CnfrmOrder.defaultProps = {
    images: ["uploads/image-1719631845980.jpg", "uploads/image-1719631845980.jpg"],
    price: "200",
    name: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
}

export default CnfrmOrder;