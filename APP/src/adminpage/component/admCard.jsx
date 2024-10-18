import React from 'react';
import imgg from '../../Sources/img/products/f1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';



function AdmCard(props) {
    const host = "http://localhost:2000";

    const delProduct = async(id)=>{
        const response = await fetch(`${host}/product/delprod/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response){
            console.log(response)
            alert("Product Deleted successfully")
        }
    }

    return (
        <div className="pro">
            <img src={props.image} alt="" style={{objectFit: "contain"}} />
            <div className="des">
                <span>{props.brand}</span>
                <h5>{props.name}</h5>
                <h4>${props.price}</h4>
                <div className='editIcons'>
                    <FontAwesomeIcon className='FAIcon' icon={faEdit} />
                    <FontAwesomeIcon id={props.id} onClick={() => delProduct(props.id)} className='FAIcon' icon={faTrash} />
                    {/* <FontAwesomeIcon className='FAIcon' icon={faMinusCircle} />
                    <FontAwesomeIcon className='FAIcon' icon={faPlusCircle} /> */}
                </div>
            </div>
        </div>
    );
}
AdmCard.defaultProps = {
    image: imgg,
    price: "200",
    name: "Cartoon Astronaut T-Shirts",
    brand: "adidas",
}


export default AdmCard;