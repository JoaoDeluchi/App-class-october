import { route as productRoute } from './products/product'
import express from 'express'
const port = 3333
const app = express()
app.use(express.json())
app.use(productRoute)


app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`)
})
