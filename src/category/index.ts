import { IProduct } from "../interfaces/product";
import { Alcoholic } from "../products/Alcoholic";
import { Beer } from "../products/Beer";
import { Cigar } from "../products/Cigar";
import { Product } from "../products/Product";
import { Water } from "../products/Water";

export class Factory {
    getObject(description: string, price: number, category: string): IProduct{
        switch(category){
            case 'beer' || 'Beer':
                return new Beer(description, price)
            case 'cigar' || 'Cigar':
                return new Cigar(description, price)
            case 'water' || 'Water':
                return new Water(description, price)
            case 'alcoholic' || 'Alcoholic':
                return new Alcoholic(description, price)
            default:
                return new Water(description, price)
            }   
    }      
}