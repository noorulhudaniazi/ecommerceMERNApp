import React from "react";
import ClientContext from "./clientcon";

function Clientprovider(props) {
    const host = "http://localhost:2000";

    const addUser = async (Client) => {

        const response = await fetch(`${host}/client/createUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Client)
        });
        const json = await response.json();
        if (response.status === 200) {
            localStorage.setItem("auth_token", json.auth_token)
            localStorage.setItem("success", "loginlogin")
            return("SignUp successful")
            // return { status: response.status, message: response.statusText }
        } else if (response.status === 400) {
            return("user already Exist")
            // return { status: response.status, message: response.statusText }
        } else {
            return("user already Exist")
            // return { status: response.status, message: response.statusText }
        }
    }

    const fetchdata = async (cred) => {
        const response = await fetch(`${host}/client/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cred)
        });

        // const json = await response.json();
        if (response.status === 200) {
            localStorage.setItem("auth_token", response.auth_token)
            localStorage.setItem("success", "loginlogin")
            return { status: response.status, message: response.statusText }
        } else if (response.status === 400) {
            return { status: response.status, message: response.statusText }
        } else {
            return { status: response.status, message: response.statusText }
        }
    }


    const getallclients = async () => {
        const response = await fetch(`${host}/client/getclients`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();
        return result
    }


    const fetchorder = async (req, res) => {
        const response = await fetch(`${host}/orders/getallorders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const json = await response.json();
        if (response) {
            // console.log(json)
            return json
        }
    }


    const placeorder = async (order) => {

        const auth = localStorage.getItem('auth_token');
        const response = await fetch(`${host}/orders/placeneworder`, {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json",
                "auth_token": auth 
            }
        });
        // const json = await response.json();
        if (response) {
            // console.log("promise is fulfilled" + json)
            return("Order Placed Succesfull")
        }
    }




    return (
        <ClientContext.Provider value={{ addUser, getallclients, fetchdata, fetchorder, placeorder }}>
            {props.children}
        </ClientContext.Provider>
    );
}

export default Clientprovider;
