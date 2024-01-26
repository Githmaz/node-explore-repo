import { User } from "../models/entities/user-auth";

export interface IUserRepository {
    createUser(email: string, password: string): Promise<User[]>;
  }
  