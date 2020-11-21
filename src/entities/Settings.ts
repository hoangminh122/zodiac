import { Column, CreatedAt, DataType, Model, UpdatedAt } from "sequelize-typescript";
import { Sequelize } from "sequelize/types";


export class Settings extends Model<Settings> {
    @Column({
        primaryKey:true,
        type:DataType.INTEGER,
        autoIncrement:true
    })
    id!: number;

    @Column({
        type:DataType.STRING(255),
    })
    key?: string;

    @Column({
        type:DataType.JSONB

        
    })
    value?: string;

    @CreatedAt
    @Column({
        field:'create_at',
        type:DataType.DATE,
        defaultValue:Sequelize.fn('now')
    })
    createdAt:Date;

    @UpdatedAt
    @Column({
        field:'update_at',
        type:DataType.DATE,
        defaultValue:Sequelize.fn('now')
    })
    updatedAt:Date;


}