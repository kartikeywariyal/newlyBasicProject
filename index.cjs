const express =require('express')
const mongoose = require('mongoose')
const { Schema } = mongoose
const cors = require('cors')

const app = express()
app.use(express.json())

async function main() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected')
}
main().catch(err => console.log(err))
app.use(cors({ origin: '*'  }))


const productsSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    image: String
})
const Product = mongoose.model('products', productsSchema)



const auth = (req, res, next) => {
    if (req.query.password == process.env.API_PASSWORD) next()
    else res.status(401).send('Unauthorized')
}


const postReq = async (req, res) => {
    await Product.create(req.body)
    res.send('Product added successfully')
}

const getReqAll = async (_req, res) => {
    console.log('Fetching all products')
    const products = await Product.find()

    res.send(products)
}

const getReqId=async (req, res)=> {
    const products = await Product.findOne({ 'id': req.params.id })
    res.send(products)
}

const updateData = async (req, res) => {
    await Product.updateOne({ id: req.params.id }, { $set: req.body })
    res.send('Product updated successfully')
}

const deleteData = async (req, res) => {
    await Product.deleteOne({ id: req.params.id })
    res.send('Product deleted successfully')
}
app.post('/products', auth, postReq)

app.get('/products', auth, getReqAll)

app.get('/products/:id', auth, getReqId)

app.put('/products/:id', auth, updateData)

app.delete('/products/:id', auth, deleteData)


module.exports = app