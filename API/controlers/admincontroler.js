import express from 'express';
const router = express.Router();
import Jwt from "jsonwebtoken";
const { sign } = Jwt;
import bcrypt, { genSalt, hash } from "bcrypt";
const { compare } = bcrypt
import AdminModal from '../schema/adminmodal.js';


router.post('/authenticateadmin', (async(req, res)=>{
    try {
        const { email, password } = req.body;
        const result = await AdminModal.find({ adminemail: email })
        const user = result[0]
        if (result) {

            const authen = await compare(password, user.adminpassword);

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
                    chutiyaShehanshaBoothylaal: true
                }

                res.send(final);
            }
            else {
                const final = {
                    success: false
                }

                res.send(final);
            }
        } else {
            const final = {
                success: false
            }

            res.send(final);
        }

    } catch (error) {
        const final = {
            success: false
        }

        res.send(final);
    }
}))


router.post('/createAdmin', (async(req, res)=>{
        try {
            const { email, name, contact, password, secretCode, role } = req.body;
            console.log(req.body)
            const passhash = async () => {
                const pass = password
                const salt = await genSalt(8);
                const process = await hash(pass, salt);
                return process
            }
            const hashed = await passhash();
            // console.log(hashed)
            const doc = new AdminModal({
                adminemail: email,
                adminname: name,
                admincontact: contact,
                adminpassword: hashed,
                adminsecretcode: secretCode,
                adminjob: role,
            })
            const result = await doc.save();
            const id = result._id
            const secret = process.env.JWTOKEN

            const auth_token = () => {
                return sign({ id: id }, secret)
            }

            const auth = auth_token();
            // console.log(auth)

            // console.log(id)
            res.send(auth);
        } catch (error) {
            res.send("error is handling")
        }
    }
))


export default router