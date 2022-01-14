import { Router, Request, Response } from 'express'

const route = Router()

route.get('/products', (req: Request, res: Response) => {
    res.json({parabens: 'funcou essa mizéria' })
})

export { route }