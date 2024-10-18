import React, { useEffect, useState } from 'react';
import Prodcard from './prodcard';
import { Link } from 'react-router-dom';

function ProdSect(props) {
    const [Products, setProducts] = useState([])

    const host = "http://localhost:2000";

    const loadFunc = async (pg) => {
        const response = await fetch(`${host}/product/getallprods?page=1&limit=8`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        setProducts(result)
    }

    useEffect(() => {
        loadFunc();
    }, []);

    // console.log(Products)


    return (
        <div>
            <section id="product-1" className="">

                <h2>{props.head}</h2>
                <p>{props.desc}</p>

                <section id="product-1" className="container">
                    <div className='row'>
                        {
                            Products.map((element) => {
                                const id = element._id
                                return (
                                    <Link to={`/oproduct/${id}` } onClick={(e) => { e.preventDefault(); window.location.assign(`/oproduct/${id}`)}} key={id}>
                                        <Prodcard id={element.id} name={element.title} price={element.price} image={`${host}/${element.images[0]}`} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </section>
            </section >
        </div>
    );
}

ProdSect.defaultProps = {
    head: "Featured Products",
    desc: "Summer Collection New Morden Design",
}

export default ProdSect;