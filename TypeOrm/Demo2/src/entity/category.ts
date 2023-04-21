import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";

@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(() => Product, (product) => product.category)
    products: Product[]
}

