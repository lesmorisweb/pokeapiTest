
import { Column, Model, Table, DataType, PrimaryKey, BelongsTo, ForeignKey} from "sequelize-typescript"
import { User } from "./users"


@Table
export class PokeSearch extends Model <PokeSearch, IPokeSearch>{

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare photo: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare name: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    declare searchId: number

    @BelongsTo(()=> User, {
        foreignKey: "userId"
    })
    declare user: User
}

interface IPokeSearch {
    photo: string,
    name: string,
    userId: number
}