function upload(req,res) {
    if (req.file.filename) {
        res.status(201).json({
            message: "Image upload successfuly",
            url: req.file.filename
        })
    }else{
        res.status(500).json({
            message: "Image upload faild"
        });
    }
}

module.exports = {
    upload:upload
}