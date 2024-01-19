import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"User"})
export class User {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    username:string;
    
    @Column()
    email: string;

    @Column()
    age: number;

    
}
