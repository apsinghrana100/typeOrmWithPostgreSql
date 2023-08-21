import {Entity,BaseEntity,Column,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Person extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name : string;

    @Column()
    last_name : string;

    @Column({
        unique:true
    })
    email:string;

    @Column({
        unique :true,
        length :10
    })
    card_number:string;

   

    // @Column({
    //     unique: true,
    //     length :10
    // })
    // employee_number: string;

    @Column({
        default:true,
        name : "active"
    })
    is_active : boolean;
}