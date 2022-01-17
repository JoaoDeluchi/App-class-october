import { IOrder } from "../interfaces/order"
import { productDBInstance } from './instance'

export class OrderDB {
    orderList: IOrder[] = []

    addOrder(newOrder: IOrder){
        this.orderList.push(newOrder)
    }
    /// removeProductOfList
    addProductOnOrder(productId: string, orderId: string){
        const [newProduct] = productDBInstance.getProductById(productId)
        for(let order of this.orderList){
            if(order.id===orderId){
                order.products.push(newProduct)
            }
        }
    }

    deleteOrder(orderId: string){
        this.orderList = this.orderList.filter((order) => order.id !== orderId)
    }
    
    updateOrder(orderId: string, updatedOrder: IOrder){
        this.orderList.filter(order => {
            if(order.id === orderId){
                order = updatedOrder
            }
        })
    }
}