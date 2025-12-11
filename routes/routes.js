const express = require("express")
const router = express.Router()
const {readAll, readOne, create, updateOne, deleteOne} = require("../controller/controller.js")


router.get("/", readAll)

router.get("/:id", readOne)

router.post("/", create)

router.patch("/:id", updateOne)

router.delete("/:id", deleteOne)


module.exports = router