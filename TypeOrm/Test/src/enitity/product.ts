import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @Column({type: 'text'})
    image: string;
    @Column({type: 'int'})
    category: number;
    @Column({type: 'varchar'})
    name: string;
}



