import React, { useState } from 'react';
import AdmCard from './component/admCard';
import ADMnav from './component/ADMnav';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

function AdmProduct(props) {

    const [Products, setProducts] = useState([])
    const [Page, setPage] = useState(1)
    const [totalres, settotalres] = useState(2)
    const host = "http://localhost:2000";

    const loadFunc = async (pg) => {
        const response = await fetch(`${host}/product/getallprods?page=${Page}&limit=8`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        setProducts(Products.concat(result))
        const totalresult = await fetch(`${host}/product/totalprods`)
        const totalrec = await totalresult.json();
        settotalres(totalrec)
        if (totalres.totalrecords !== Products.length) {
            setPage(Page + 1)
        }
        console.log(Page)
    }

    return (
        <div>
            <ADMnav />
            <section id="product-1" class="section-p1">

                <div className="pro-container">
                    <InfiniteScroll
                        // pageStart={0}
                        loadMore={loadFunc}
                        hasMore={totalres.totalrecords !== Products.length}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        <div className='row'>
                            {
                                Products.map((element) => {
                                    const id = element._id
                                    return (
                                        // <Link to={`/oproduct/${id}`} key={id}>
                                            <AdmCard key={id} id={id} name={element.title} price={element.price} country={element.country} image={`${host}/${element.images[0]}`} />
                                        // </Link>
                                    )
                                })
                            }

                        </div>
                    </InfiniteScroll>
                </div>
            </section>
        </div>
    );
}

export default AdmProduct;