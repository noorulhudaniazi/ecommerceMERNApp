import React, { useState, useContext, createElement } from 'react';
import ProductContext from '../pages/prodcontext/ProdCon';
import { useNavigate } from 'react-router-dom';
import ADMnav from './component/ADMnav';

function Addlisting(props) {
    const navigate = useNavigate();


    const { addProd } = useContext(ProductContext);



    const addProduct = (e) => {
        e.preventDefault();
        addProd(Prod)
        alert("Product added successfully in the Database")
        navigate('/adlisting')
    }

    const [Prod, setProd] = useState({ title: "", color: "", tags: "", description: "", price: "", images: "", status: "", condition: "" });

    const enterData = (e) => {
        setProd({ ...Prod, [e.target.name]: e.target.value })
        console.log(Prod.price)
    }

    const addingTag = (e) => {
        const tagsContainer = document.getElementById("tags");
        if (e.keyCode === 13) {
            const tagValue = e.target.value;

            if (tagValue) {
                const newTag = document.createElement("span");
                newTag.innerText = tagValue;
                newTag.classList.add("classOfTag"); 
                tagsContainer.appendChild(newTag);
                
                e.target.value = "";
            }
        }};

        const enterimage = (e) => {
            setProd({ ...Prod, images: e.target.files })
        }

        return (
            <div>
                <ADMnav />
                <section className="container alignment">
                    <form className="ALforms" method="POST" encType="multipart/form-data">
                        <h2>Add New Listing</h2>
                        <div className="container form_in">
                            <h3>Details:</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <legend>Product Title:</legend>
                                    <input className="inputSignUp" type="text" id="ALname" name="title" placeholder="" onChange={enterData} required />
                                </div>
                                {/* </div>
                        <div className="row"> */}
                                <div className="col-md-6">
                                    <legend>Color:</legend>
                                    <input type="text" className="inputSignUp" id="ALcolour" name="color" placeholder="" onChange={enterData} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <legend>Tags:</legend>
                                    <div className='tagsSide' id='tags'></div>
                                    <textarea className="inputSignUp" id='myInput' onKeyDown={addingTag} name="tags" onChange={enterData}></textarea>
                                </div>
                                <div className="col-md-6">
                                    <legend>Discription:</legend>
                                    <textarea className="inputSignUp" name="description" onChange={enterData} required></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <legend>Enter Price:</legend>
                                    <input type="number" className="inputSignUp" name="price" placeholder="" onChange={enterData} required/>
                                </div>
                                <div className="col-md-6">
                                    <legend>Enter Images:</legend>
                                    <input type="file" className="ALimages" name='images' onChange={enterimage} multiple required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <legend>Status:</legend>
                                    <select className="inputSignUp" name="status" onChange={enterData} required>
                                        <option>Available</option>
                                        <option>UnAvailable</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <legend>Usage:</legend>
                                    <select className="inputSignUp" name="condition" onChange={enterData} required>
                                        <option>New/Never Worm</option>
                                        <option>Small used</option>
                                        <option>Used</option>
                                    </select>
                                </div>
                            </div>
                            <button className='submitSignUp' onClick={addProduct}>Add Products</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }

    export default Addlisting;