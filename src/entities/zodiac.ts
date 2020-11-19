import { Column, DataType, HasMany, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { DayOfZodiac } from "./dayOfZodiac";
import { MonthOfZodiac } from "./monthOfZodiac";


@Table({
    tableName:'zodiacs'
})
export class Zodiacs extends Model<Zodiacs> {

    @PrimaryKey
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
    })
    id!:number;

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

    @HasMany(()=>MonthOfZodiac,'zodiacId')
    monthOfZodiacs :MonthOfZodiac[];


}