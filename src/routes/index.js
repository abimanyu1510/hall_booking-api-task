import express from "express"
import IndexController from '../controller/index.js'
import RoomRoutes from './room.js'

let router = express.Router()

router.get('/', IndexController.homePage)
router.use('/rooms',RoomRoutes)

export default router