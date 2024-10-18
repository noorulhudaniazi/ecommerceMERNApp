import React from "react";
import ProductContext from "./ProdCon";
// import axios from "axios";

function Prodprovider(props) {

    const host = "http://localhost:2000";

    const addProd = async(Prod)=>{

        const { title, color, tags, description, price, images, status, condition } = Prod;
        
        const formData = new FormData();
        formData.append('title', title)
        formData.append('color', color)
        formData.append('tags' , tags)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('status', status)
        formData.append('condition', condition)

        for(let i=0;i<images.length;i++){
            formData.append('image', images[i])
        }

            const response = fetch(`${host}/product/addprod`, {
            method: "POST",
            body: formData,
            headers: {
            }
         });
         const json = response;
         if(response){
            return("Data Added Successfully")
         }
         return json
     }

     const getallprods = async(Page) =>{
        console.log(Page)
        const response = await fetch(`${host}/product/getallprods?page=${Page}&limit=8`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
         });

         const result = response.json();
         return result
     }

     const prodByCat = async(category) =>{
        const response = await fetch(`${host}/product/prodbycat/${category}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
         });

         const result = response.json();
         return result
     }


     const getoneprod = async(id) =>{
        const response = await fetch(`${host}/product/singleprod/${id}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
         });

         const result = response.json();
        //  console.log(result)
         return result
     }

     const cartobjs = async(req, res) =>{
        const auth = localStorage.getItem('auth_token')
        // console.log(auth)
        const response = await fetch(`${host}/client/productcart`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth_token": auth
            },
        });
        const json = await response.json();
        if (response) {
            console.log(json)
            return json
        }
     }


    const addtocart = async(id) =>{
        const auth = localStorage.getItem('auth_token')
        // console.log(auth)
        const response = await fetch(`${host}/client/pushproduct/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth_token": auth
            },
        });
        const json = await response.json();
        if (response) {
            return json
        }
    }

    const delCartProd = async(id) =>{
        const auth = localStorage.getItem('auth_token')
        const response = await fetch(`${host}/client/delProduct/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth_token": auth
            },
        });
        const json = await response.json();
        if (response) {
            return json
        }
    }


    return (
       <ProductContext.Provider value={{addProd, delCartProd, getallprods, getoneprod, prodByCat, cartobjs, addtocart}}>
        {props.children}
       </ProductContext.Provider>
    );
}

export default Prodprovider;