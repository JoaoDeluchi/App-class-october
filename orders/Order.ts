import {  IOrder } from '../interfaces/order'
import { IProduct } from '../interfaces/product'
import { IClient } from '../interfaces/client'

export class Order implements IOrder {
    id: string
    client: IClient
    value: number
    products: IProduct[]

    constructor(client: IClient, value: number, products: IProduct[]){
        this.id = `${Math.floor(Math.random() * (5000000000 - 1))}`
        this.client = client
        this.value = value
        this.products = products
    }
}