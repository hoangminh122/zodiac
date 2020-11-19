import { AutoIncrement, Column, DataType, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { DayOfZodiac } from "./dayOfZodiac";
import { Zodiacs } from "./zodiac";

@Table({tableName:'month_of_zodiac',timestamps:false})
export class MonthOfZodiac extends Model<MonthOfZodiac> {

    @PrimaryKey
    @AutoIncrement
    @Column({
        field:'id',
        defaultValue:DataType.INTEGER
    })
    id!:number;

    @Column({
        allowNull:false,
        field:'content',
        type:DataType.TEXT
    })
    content:string;

    @ForeignKey(() => Zodiacs)
    @Column({ field: 'zodiac_id', allowNull: true, type: DataType.INTEGER })
    zodiacId!:number
    
    @HasMany(()=>DayOfZodiac,'monthZodiacId')
    dayOfZodiacs :DayOfZodiac[];
    
}