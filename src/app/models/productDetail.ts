import { ProductImage } from './productImage';
export interface ProductDetail{
    productId: number;
    categoryName:string;
    productName: string;
    unitsInStock: number;
    price: number;
    imagePath:ProductImage[];
}