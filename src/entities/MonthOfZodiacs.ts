import { AutoIncrement, Column, CreatedAt, DataType, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Sequelize } from "sequelize";
import { DayOfZodiac } from "./DayOfZodiac";
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