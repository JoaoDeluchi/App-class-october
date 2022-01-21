import { IProduct } from "../interfaces/product"
import { Product } from "../products/Product"

//// Deleta um produto pelo id
//// Edita um produto pelo id, recebendo todas as props do produto
//// A CAMADA DE VIEW DEVE SER IMPLEMENTADA TAMBÉM 
export class ProductDB {
    productList: IProduct[] = []

    createNewProduct(newProduct: Product){
        this.productList.push(newProduct)
    }

    getProductById(productId:string): Product[]{
        return this.productList.filter(({id}) => productId === id )
    }
}
