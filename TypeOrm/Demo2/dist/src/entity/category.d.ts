import { BaseEntity } from "typeorm";
import { Product } from "./product";
export declare class Category extends BaseEntity {
    id: number;
    name: string;
    products: Product[];
}
