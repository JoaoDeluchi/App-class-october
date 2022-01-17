import { productDBInstance } from '../../infra/instance'
/// Router é a classe que cria objeto com os http methods
/// Request Response types do express que podem ser importados após instalação do @types/express
import { Router, Request, Response } from 'express'
import { Beer } from '../../products/Beer'
const route = Router()

route.get('/products', (_: Request, res: Response) => {
    res.json(productDBInstance.productList)
})

route.post('/product/beer',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newBeer = new Beer(price, description)
    productDBInstance.createNewProduct(newBeer)
    res.json(productDBInstance.productList)
})


export { route }