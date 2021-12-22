const express = require('express');
const router = express.Router();

//=================================
//             Product
//=================================

router.post('/image', (req, res) => {
    // 가져온 이미지를 저장을 해주면 된다.
    // server쪽에서 multer를 사용하기 때문에 client가 아닌 현재 폴더에서 npm install multer --save
});

module.exports = router;
