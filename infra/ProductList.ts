import { IProduct } from "../interfaces/product"
import { Product } from "../products/Product"


export class ProductDB {
    productList: IProduct[] = []

    createNewProduct(newProduct: Product){
        this.productList.push(newProduct)
    }

    getProductById(productId:string): Product[]{
        return this.productList.filter(({id}) => productId === id )
    }
}
