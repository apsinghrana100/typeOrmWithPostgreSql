import { Entity, Column, ManyToMany, JoinTable,CreateDateColumn,UpdateDateColumn} from "typeorm";
import { Client } from "./client";
import { Person } from "./utils/person";

@Entity('banker')
export class Banker extends Person {

    @Column({
        unique: true,
        length: 10
    })
    employee_number: string;

    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean;

    @ManyToMany(
       () => Client
    )
    @JoinTable({
        name: "banker_clients",
        joinColumns: [{
            name: "banker",
            referencedColumnName: "id"
        }],
        inverseJoinColumns: [{
            name: "client",
            referencedColumnName: "id"
        }]
    })
    clients: Client[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}
