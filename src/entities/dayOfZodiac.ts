import { AutoIncrement, Column, DataType, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName:'day_of_zodiac',timestamps:false})
export class DayOfZodiac extends Model<DayOfZodiac> {

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