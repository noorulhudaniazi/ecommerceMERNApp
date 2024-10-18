import clientmodel from "../schema/usermodal.js";
import Jwt from "jsonwebtoken";
const { sign } = Jwt;
import bcrypt from "bcrypt";
import productmodel from "../schema/productmodal.js";
import userModel from "../schema/usermodal.js";
const { hash, genSalt, compare } = bcrypt


class clientcontroller {

    static createClient = async (req, res) => {
        try {
            const { name, username, email, contact, address, city, password, cart } = req.body;

            const getCheck = await this.check(email);
            // console.log(getCheck)

            if (getCheck) {
                const passhash = async () => {
                    const pass = password
                    const salt = await genSalt(8);
                    const process = await hash(pass, salt)
                    return process
                }
                const hashed = await passhash()
                // console.log(hashed)
                const doc = new userModel({
                    Name: name,
                    userName: username,
                    userEmail: email,
                    userContact: contact,
                    userAddress: address,
                    password: hashed,
                    city: city,
                    cart: cart
                })
                const result = await doc.save();
                const id = result._id
                const secret = process.env.JWTOKEN

                const auth_token = () => {
                    return sign({ id: id }, secret)
                }

                const auth = auth_token();
                res.send({auth_token:auth});
            }
            else{
                // res.send("User Already Exist");?
                res.statusMessage = "User Already Exist";
                res.status(400).end();
            }
        } catch (error) {
            res.statusMessage = "Server Is Not responding";
            res.status(408).end();
        }
    }


    static check = async (email) => {
        try {
            const existingUser = await userModel.find({ 'userEmail': email });
            const value = existingUser.length > 0 ? false : true;
            return value;
        } catch (err) {
            return false; // Handle errors gracefully, consider returning appropriate error codes
        }
    }



    static loginhandler = async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await userModel.find({ 'userEmail': email })
            const user = result[0]
            if (result) {

                const authen = await compare(password, user.password);
                if (authen) {
                    const id = user._id
                    // console.log(id)
                    const secret = process.env.JWTOKEN

                    const auth_token = () => {
                        return sign({ id: id }, secret)
                    }

                    const auth = auth_token();
                    const final = {
                        auth_token: auth,
                        success: true,
                    }

                    res.send(final);
                }
                else {
                    res.statusMessage = "Credentials Match";
                    res.status(400).end();
                }
            } else {
                res.statusMessage = "Credentials DoesNot Match";
                res.status(400).end();
            }

        } catch (error) {
            res.statusMessage = "Credentials DoesNot Match";
            res.status(400).end();
        }
    }



    static getAllClient = async (req, res) => {
        try {
            const result = await clientmodel.find();
            res.send(result);
        } catch {
            res.send("could not find result")
        }
    }



    static getClientById = async (req, res) => {
        try {
            const id = req.id
            // console.log(id)
            const result = await clientmodel.findById(id);
            const final = {
                auth_token: result,
                success: true
            }
            res.send(final);
        } catch {
            res.send("could not find result")
        }
    }



    static getProdCart = async (userid) => {
        try {
            // console.log(userid)
            const result = await userModel.findById(userid);
            if (result) {
                return (result.cart)
            }
        } catch (error) {
            res.send("Can not get results")
        }
    }



    static getCartObjs = async (req, res) => {
        try {
            const userid = req.id;
            // console.log(userid)
            const dataarray = await this.getProdCart(userid);
            // console.log(dataarray)
            const alldata = await productmodel.find({ _id: { $in: dataarray } });
            // console.log(alldata)
            if (alldata) {
                res.send(alldata)
            }
        } catch (error) {
            res.send("Internal Server Error")
        }

    }



    static pushProductCart = async (req, res) => {
        try {
            const id = req.params.pid;
            const userid = req.id
            const checking = await this.getProdCart(userid)

            // console.log(checking)

            const included = await checking.includes(id)

            if (!included) {
                const result = await userModel.updateOne(
                    { _id: userid },
                    { $push: { cart: id } }
                );
                if (result) {
                    res.send("added suucessfully")
                    // console.log("Added Successfully")
                } else {
                    res.send("Can Not Added")
                }
            } else {
                res.send("Item Already Exist")
                // console.log("Item Already Exist")
            }
        } catch (error) {
            res.send("could not find result")
            // console.log("could not find result")
        }
    }



    static delFromCart = async (req, res) => {
        try {
            const id = req.params.pid;
            const userid = req.id

            const checking = await this.getProdCart(userid)
            const included = await checking.includes(id)

            if (included) {
                const result = await clientmodel.updateOne(
                    { _id: userid },
                    { $pull: { cart: id } }
                );
                if (result) {
                    res.send("Deleted suucessfully")
                } else {
                    res.send("Can Not Deleted")
                }
            } else {
                res.send("Item Doesnot Exist")
            }
        } catch (error) {
            res.send("could not find result")
        }
    }



    static updateClient = async (req, res) => {
        try {
            const { fname, lname, email, contact, address, city, state, zip, country, cart, password } = req.body;
            const result = await clientmodel.findByIdAndUpdate(req.params.id, {
                clientName: fname + " " + lname,
                clientEmail: email,
                clientContact: contact,
                clientAddress: address,
                clientCity: city + "/" + state,
                clientZipcode: zip,
                clientCountry: country,
                password: password,
                cart: cart
            });
            res.send(result);
        } catch (error) {
            res.send("canont")
        }
    }



    static deleteClient = async (req, res) => {
        try {
            const result = await clientmodel.findByIdAndDelete(req.params.id);
            res.send(result);
        } catch (error) {
            res.send(error)
        }

    }
}


export default clientcontroller;