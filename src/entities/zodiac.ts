import { Column, CreatedAt, DataType, HasMany, HasOne, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Sequelize } from "sequelize";
import { DayOfZodiac } from "./DayOfZodiac";
import { MonthOfZodiac } from "./MonthOfZodiacs";
import { DetailZodiacs } from "./DetailZodiac"


@Table({
    tableName: 'zodiacs',
    indexes:[{
        unique:true,
        fields:['code']
    }]
})
export class Zodiacs extends Model<Zodiacs> {

    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 1
    })
    gender: number;

    @Column({
        allowNull: false,
        type: DataType.TEXT
    })
    content: string;


    @Column({
        field: 'detail_id',
        type: DataType.INTEGER
    })
    detailId: number;

    @Column({
        type: DataType.STRING
    })
    strength: string;

    @Column({
        type: DataType.STRING
    })
    weakness: string;

    @Column({
        field:'code',
      allowNull:false,
        type: DataType.STRING(20)
    })
    code: string;

    @Column({
        type: DataType.STRING
    })
    like: string;

    @Column({
        type: DataType.STRING
    })
    dislike: string;

    @HasMany(() => MonthOfZodiac, 'zodiacId')
    monthOfZodiacs: MonthOfZodiac[];

    @HasOne(() => DetailZodiacs,
        {
            foreignKey: 'zodiacId'
        })
    detailZodiac: DetailZodiacs

    @CreatedAt
    @Column({
        field: 'create_date',
        allowNull: false,
        type: DataType.DATE,
        defaultValue: Sequelize.fn('now')

    })
    createdAt: Date;

    @UpdatedAt
    @Column({
        field: 'update_date',
        allowNull: false,
        type: DataType.DATE,
        defaultValue: Sequelize.fn('now')

    })
    updatedAt: Date;


}