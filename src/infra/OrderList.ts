import { IOrder } from "../interfaces/order"
import { IProduct } from "../interfaces/product"
import { TaxProduct } from "../products/TaxProduct"
import { productDBInstance } from './instance'
import { Order } from "../orders/Order"


export class OrderDB {
    orderList: IOrder[] = []

    addOrder(product: IProduct[]){
        const newOrder = new Order(product)
        this.orderList.push(newOrder)
        return newOrder
    }

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
        return this.orderList
    }

    
    updateOrder(orderId: string, updatedOrder: IOrder){
        this.orderList.filter(order => {
            if(order.id === orderId){
                order = updatedOrder
            }
        })
    }

    getOrderById(orderId: string){
        return this.orderList.filter((order) => order.id === orderId)
    }
    
  getSubTotal(orderId: string): number {
    let subTotal = 0
    for (const order of this.orderList) {
      if (orderId === order.id) {
        subTotal = order.products.reduce((sum, { price }) => sum + price, 0)
      }
    }
    return subTotal
  }

  getTaxes(orderId: string): number {
    let taxes = 0
    for (const order of this.orderList) {
      if (orderId === order.id) {
        for (const item of this.orderList) {
          if (item instanceof TaxProduct) {
            taxes += item.getTax() * item.price
          }
        }
      }
    }
    return taxes
  }

  getTotal(orderId: string): number {
    return this.getSubTotal(orderId) + this.getTaxes(orderId)
  }

  removeOrderItem(orderId: string, productId: string){
    for(let order of this.orderList){
        if(order.id === orderId){
            order.products = order.products.filter((product) => product.id !== productId)
            return order
        }
    }
  }
}
