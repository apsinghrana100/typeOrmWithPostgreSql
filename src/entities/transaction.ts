import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
 import { Client } from "./client";
 // Import the Client entity

    // abc = require("../entities/client")
// console.log(abc)
export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
};

@Entity('transaction')
export class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransactionTypes
    })
    type: string;

    @Column({
        type: "numeric"
    })
    amount: number;

    @ManyToOne(() => Client, client => client.transaction)
    @JoinColumn({
        name: 'client_id'
    })
    client: Client; // Specify the type explicitly

}


