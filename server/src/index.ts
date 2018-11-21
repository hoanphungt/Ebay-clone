import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import Controller from "./controller"
import AdController from './ads/controller';


const port = process.env.PORT || 4000

const app = createKoaServer({
    cors: true,
    controllers: [
       Controller,
       AdController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))