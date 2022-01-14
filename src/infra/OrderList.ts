import { IOrder } from "../interfaces/order";

export default class Order {
    orderList: IOrder[] = []

    addOrder(newOrder: IOrder){
        this.orderList.push(newOrder)
    }
    /// deleteOrder , addProductOnList, removeProductOfList
    updateOrder(orderId: string, updatedOrder: IOrder){
        this.orderList.filter(order => {
            if(order.id === orderId){
                order = updatedOrder
            }
        })
    }
}