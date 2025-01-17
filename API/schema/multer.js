import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        var ext = file.originalname.substring(file.originalname.lastIndexOf('.'));

        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})


const upload = multer({ storage: storage })

export default upload