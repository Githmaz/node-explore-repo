import { Context } from "../../context";
import { User } from "../../models/entities/user-auth";
import { IUserRepository } from "../user-auth";

export class UserRepositoryMssql implements IUserRepository {
    constructor(private readonly context: Context) {}
  
    async createUser(email: string, password: string): Promise<User[]> {
    //   const hashedPassword = await bcrypt.hash(password, 10);
      const query = `INSERT INTO Users (email, password) VALUES ('${email}', '${password}')`;
      try {
         return await this.context.db.executeQuery<User>(query);
      } catch (err) {
        throw err;
      }
    }
  }