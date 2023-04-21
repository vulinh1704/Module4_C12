import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @Column({type: 'text'})
    image: string;
    @ManyToOne(() => Category, (category) => category.products)
    category: number;
    @Column({type: 'varchar'})
    name: string;
}


let product = new Product();
product.price = 1;
product.save()


