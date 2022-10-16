import multer from "multer"
import fs from 'fs'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = file.originalname
      cb(null, uniqueSuffix)
    }
  })

const upload = multer({storage: storage, limits: {fieldSize: 3145728}}).array('file', 5)
//const upload = multer({dest: './upload'}).array('file', 5)

export default upload;