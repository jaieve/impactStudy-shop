const express = require('express');
const router = express.Router();
const multer  = require('multer')
// const upload = multer({ dest: './public/data/uploads/' })

//=================================
//             Product
//=================================

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}+${file.originalname}`)
    }
})

const upload = multer({ storage: storage }).single('file');

router.post('/image', (req, res) => {
    // 가져온 이미지를 저장을 해주면 된다.
    // server쪽에서 multer를 사용하기 때문에 client가 아닌 현재 폴더에서 npm install multer --save
    upload(req, res, err => {
        if(err) {
            return res.json({success:false, err});
        }
        return res.json({success: true, filePath : req.file.path, fileName : req.file.name})
    })
});

module.exports = router;
