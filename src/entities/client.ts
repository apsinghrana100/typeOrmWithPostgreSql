import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";

 import { Transaction } from "./transaction";
 import { Person } from "./utils/person";
 import { Banker } from "./bankers";

import { BaseEntity } from "typeorm";

@Entity('client')
export class Client extends Person {

    @Column({
        type:"numeric"
    })
    balance:number;

    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean;

    @Column({
        type: "simple-json",
        nullable: true
    })
    additional_info: {
        age: number,
        hair_color: string
    };

    @Column({
        type: "simple-array",
        default: []
    })
    family_member: string[];

    @OneToMany(() => Transaction, transaction => transaction.client)
    transaction: Transaction[];

    @ManyToMany(
        () =>Banker
    )
    bankers : Banker[];


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}
