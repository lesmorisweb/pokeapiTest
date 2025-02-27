
import { Column, Model, Table, DataType, BelongsTo} from "sequelize-typescript"
import { User } from "./users"


@Table
export class PokeSearch extends Model <PokeSearch, IPokeSearch>{

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare pokemonId: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare pokemonName: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare userName: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    declare userId: number

    @BelongsTo(()=> User, {
        foreignKey: "userId"
    })
    declare user: User
}

interface IPokeSearch {
    pokemonId: number,
    pokemonName: string,
    userName: string,
    userId: number
}