import { Column, CreatedAt, DataType, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Sequelize } from "sequelize";
import { DayOfZodiac } from "./DayOfZodiac";
import { MonthOfZodiac } from "./MonthOfZodiacs";


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
        type:DataType.INTEGER,
        defaultValue:1
    })
    gender:number;

    @Column({
        allowNull:false,
        type:DataType.TEXT
    })
    content:string;

    @HasMany(()=>MonthOfZodiac,'zodiacId')
    monthOfZodiacs :MonthOfZodiac[];

    @CreatedAt
    @Column({
        field:'create_date',
        allowNull:false,
        type:DataType.DATE,
        defaultValue:Sequelize.fn('now')
        
    })
    createdAt: Date;

    @UpdatedAt
    @Column({
        field:'update_date',
        allowNull:false,
        type:DataType.DATE,
        defaultValue:Sequelize.fn('now')
        
    })
    updatedAt: Date;


}