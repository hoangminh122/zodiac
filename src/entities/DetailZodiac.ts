import { Column, CreatedAt, DataType, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Sequelize } from "sequelize";
import { Zodiacs } from "./zodiac";


@Table({
    tableName: 'detail_zodiacs'
})
export class DetailZodiacs extends Model<DetailZodiacs> {

    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        allowNull: false,
        type: DataType.DATEONLY
    })
    dayOfBirth: Date;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    genProperties: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    element: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    star: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    iconStar: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    colorLove: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    flower: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    metal: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    animal: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    numberLucky: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    pairingLover: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    pairingFriends: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    notPairingLover: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    rockNumber: string;



    @ForeignKey(() => Zodiacs)
    @Column({
        field: 'zodiac_id',
        allowNull: false,
        type: DataType.INTEGER
    })
    ZodiacId: number;


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