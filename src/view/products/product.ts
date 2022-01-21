import { productDBInstance } from '../../infra/instance'
/// Router é a classe que cria objeto com os http methods
/// Request Response types do express que podem ser importados após instalação do @types/express
import { Router, Request, Response } from 'express'
import { Beer } from '../../products/Beer'
import { Cigar } from '../../products/Cigar'
import { Alcoholic } from '../../products/Alcoholic'
const route = Router()

route.get('/products', (_: Request, res: Response) => {
    res.json(productDBInstance.productList)
})

route.get('/product/id=:id', (req: Request, res: Response) => {
    const { id } = req.params
    const [currentProduct] = productDBInstance.getProductById(id)
    res.json(currentProduct)
})

route.post('/product/beer',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newBeer = new Beer(description, price)
    productDBInstance.createNewProduct(newBeer)
    res.json(productDBInstance.productList)
})

route.post('/product/cigar',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newCigar = new Cigar(description, price)
    productDBInstance.createNewProduct(newCigar)
    res.json(productDBInstance.productList)
})

route.post('/product/alcoholic',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newAlcoholic = new Alcoholic(description, price)
    productDBInstance.createNewProduct(newAlcoholic)
    res.json(productDBInstance.productList)
})

export { route }