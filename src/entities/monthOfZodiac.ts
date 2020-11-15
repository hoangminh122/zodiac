import { AutoIncrement, Column, DataType, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName:'month_of_zodiac',timestamps:false})
export class MonthOfZodiac extends Model<MonthOfZodiac> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        field:'id',
    })
    id!:string;

    @Column({
        allowNull:false,
        field:'content',
        type:DataType.TEXT
    })
    content:string;
}