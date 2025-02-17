
import { Column, Model, Table, DataType, HasMany, ForeignKey} from "sequelize-typescript"
import { PokeSearch } from "./pokeSearch"

@Table
export class User extends Model<User, IUsersAttributes>{
    @Column
    ({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare userName: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string

    @HasMany(()=>PokeSearch,{
        foreignKey: "searchId"
    })
    declare pokeSearch: PokeSearch[]
}



interface IUsersAttributes{
    name: string,
    userName: string,
    password: string,
}
