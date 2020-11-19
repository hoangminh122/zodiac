import { AutoIncrement, Column, DataType, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { MonthOfZodiac } from "./monthOfZodiac";

@Table({tableName:'day_of_zodiac',timestamps:false})
export class DayOfZodiac extends Model<DayOfZodiac> {

    @PrimaryKey
    @Column({
        field:'id',
        primaryKey:true,
        autoIncrement:true,
        defaultValue:DataType.NUMBER
    })
    id!:number;

    @Column({
        allowNull:false,
        field:'content',
        type:DataType.TEXT
    })
    content:string;

    @ForeignKey(() => MonthOfZodiac)
    @Column({ field: 'monthZodiac_id', allowNull: true, type: DataType.INTEGER })
    monthZodiacId!:number
}