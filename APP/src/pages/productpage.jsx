import React, { useState } from 'react';
import Prodcard from '../components/prodcard';
import Navbr from '../components/navbr';
import Footer from '../components/Footer';
import SmallBanner from '../components/smallBanner';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';



function Productpage(props) {
    const [Products, setProducts] = useState([])
    const [Page, setPage] = useState(1)
    const [totalres, settotalres] = useState(2)

    const loadFunc = async (pg) => {
        const host = "http://localhost:2000";
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


    const host = "http://localhost:2000/"
    return (
        <>
            <Navbr />
            <section id="page-header">

                <h2>#stayhome</h2>
                <p>Save more with coupons & up to 70% off!</p>

            </section>
            {/* <section id="product-1" class="section-p1"> */}
            <section id="product-1" className="container">
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
                                    <Link to={`/oproduct/${id}`} key={id}>
                                        <Prodcard id={element.id} name={element.title} price={element.price} country={element.country} image={`${host}${element.images[0]}`} />
                                    </Link>
                                )
                            })
                        }

                    </div>
                </InfiniteScroll>

                {/* </div> */}

            </section>
            <SmallBanner />
            <Footer />
        </>
    );
}

export default Productpage;