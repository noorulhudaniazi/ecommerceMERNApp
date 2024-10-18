import OrderModal from "../schema/ordermodal.js";


class OrderControllers {

    static placeNewOrder = async (req, res) => {
        try {
            const { name, contact, address, zipcode, city, quantity, size, prodname, prodID, price, status } = req.body;

            const id = req.id
            console.log(req.body)
            const doc = new OrderModal({
                customerName: name,
                customerContact: contact,
                customerAddress: address,
                customerCity: city,
                customerZipcode: zipcode,
                quantity: quantity,
                size: size,
                price: price,
                orderProduct: prodID,
                prodName: prodname,
                status: status,
            })

            const result = await doc.save();
            res.send("Data saved Successfuly")

        } catch (error) {
            console.log(error)
            res.send("Server Not Responding")
        }
    }

    static getAllOrders = async (req, res) => {
        try {
            const result = await OrderModal.find().sort({ '_id': -1 });
            res.send(result);
        } catch {
            res.send("could not find result")
        }
    }

    static getOrderById = async (req, res) => {
        try {
            const result = await OrderModal.findById(req.params.id);
            res.send(result);
        } catch {
            res.send("could not find result")
        }
    }

    static updateOrder = async (req, res) => {
        try {
            const { id, name, contact, address, city, zip, country, prodID, status } = req.body;
            const result = await OrderModal.findByIdAndUpdate(req.params.id, {
                customerID: id,
                customerName: name,
                customerContact: contact,
                customerAddress: address,
                customerCity: city,
                customerZipcode: zip,
                customerCountry: country,
                orderProduct: prodID,
                status: status
            });
            res.send(result);
        } catch (error) {
            console.log(error)
            res.send("canont")
        }
    }

    static deleteOrder = async (req, res) => {
        try {
            const result = await OrderModal.findByIdAndDelete(req.params.id);
            if(result){
                res.send("Deleted Successfully");
            }
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

}

export default OrderControllers