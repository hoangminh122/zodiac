import { AutoIncrement, Column, CreatedAt, DataType, ForeignKey, IsUUID, Model, PrimaryKey, Sequelize, Table, UpdatedAt } from "sequelize-typescript";
import { MonthOfZodiac } from "./MonthOfZodiacs";

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
    monthZodiacId!:number;

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