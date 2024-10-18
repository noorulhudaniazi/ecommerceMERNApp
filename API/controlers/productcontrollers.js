import productmodel from "../schema/productmodal.js";


class productController {




    static createProduct = async (req, res) => {
        try {

            const { title, color, tags, description, price, status, condition} = req.body;

            const pictre = req.files

            const images = []

            
            for(let i=0;i<pictre.length;i++){
                const x = pictre[i].path
                images.push(x)
            }

            // const date = Date.now();

            const doc = new productmodel({
                title: title,
                color: color,
                tagss: tags,
                description: description,
                price: price,
                images: images,
                status: status,
                condiTion: condition,
            })
            const result = await doc.save();
            res.send(result);
        } catch (error) {
            console.log(error)
        }
    }

    static getAllProducts = async (req, res) => {
        try {
            const page = req.query.page;
            const limit = req.query.limit;
            const skip = (page-1)*limit
            const result = await productmodel.find().limit(limit).skip(skip).sort({ '_id': -1 })
            res.send(result);
        } catch (error) {
            res.send(error)
        }
    }

    static getProductById = async (req, res) => {
        try {
            const result = await productmodel.findById(req.params.id);
            res.send(result);
        } catch (error) {
            res.send("could not find result")
        }
    }

    static getProductByCat = async (req, res) => {
        try {
            // console.log(req.params.category)
            const result = await productmodel.find({category: req.params.category}).sort({ '_id': -1 })
            res.send(result);
        } catch (error) {
            res.send("could not find result")
        }
    }

    static updateProduct = async (req, res) => {
        try {
            const { prodname, prodprice, prodcategory, prodcountry, proddescription, proddate, prodtags, prodcolors, prodimages, prodstatus } = req.body;
            const result = await productmodel.findByIdAndUpdate(req.params.id, {
                productName: prodname,
                productprice: prodprice,
                productCategory: prodcategory,
                productCountry: prodcountry,
                productDescription: proddescription,
                productDate: proddate,
                productTags: prodtags,
                productColor: prodcolors,
                productImages: prodimages,
                productStatus: prodstatus
            })
            res.send(result);
        } catch (error) {
            res.send("canont")
        }
    }

    static updateProdAvail = async (req, res) => {
        try {
            const { prodstatus } = req.body;
            const result = await productmodel.findByIdAndUpdate(req.params.id, {
                productStatus: prodstatus
            })
            res.send(result);
        } catch (error) {
            res.send("canont")
        }
    }

    static deleteProduct = async (req, res) => {
        try {
            const result = await productmodel.findByIdAndDelete(req.params.id);
            // console.log("deleted successfully")
            res.send(result);
        } catch (error) {
            // console.log("Error successfully")
            res.send(error)
        }

    }
}

export default productController;