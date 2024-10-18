import React from 'react';
import { useEffect, useState, useContext } from 'react';
import Navbr from '../components/navbr';
import Footer from '../components/Footer';
import BannerSignUp from '../components/bannerSignUp';
import ProdSect from '../components/prodSect';
import ProductContext from './prodcontext/ProdCon';
import { useParams } from 'react-router';
import OpenedProd from '../components/openedProd';


function OpenProd(props) {

    const { getoneprod } = useContext(ProductContext);

    const [Product, setProduct] = useState([

    ])

    const params = useParams();
    const id = params.id
    // console.log(id)

    const fetchProducts = async () =>{
        const data = await getoneprod(id)
        setProduct(data)
     }

    useEffect(() => {
        fetchProducts()
        console.log(Product)
      }, []);
    return (
        <div>
            <Navbr />
            <OpenedProd id={Product._id} name={Product.title} color={Product.color} image={Product.images} details={Product.description} />
            <ProdSect />
            <BannerSignUp />
            <Footer />

        </div>
    );
}


export default OpenProd;