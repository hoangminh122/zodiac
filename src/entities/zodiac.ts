import { Column, DataType, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({tableName:'zodiacs'})
export class Zodiacs extends Model<Zodiacs> {

    @PrimaryKey
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
    })
    id!:string;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    name:string;

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    content:string;

}