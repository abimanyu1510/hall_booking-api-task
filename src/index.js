import express from 'express'
import AppRoutes from './routes/index.js'

let app = express()
let PORT =  process.env.PORT || 8000;

app.use(express.json())

app.use('/',AppRoutes)

let date = new Date().toISOString();
console.log(date);

app.listen(PORT,()=>console.log(`App listening to ${PORT}`));