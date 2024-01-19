import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>,){}


  //------------------ Add a new User ------------------//
  async create(createUserDto: CreateUserDto) :Promise<User> {
    const newUser: User = this.userRepository.create({...createUserDto,createdAt: new Date()});
    return this.userRepository.save(newUser);
   
  }

  //------------------ Get All Users ------------------//
  async findAll(): Promise<{ Users: User[] }> {
    return { Users: await this.userRepository.find() };
  }
  //------------------ Get User By ID ------------------//
  async findOne(id: number): Promise<User | undefined> {
    // const user = await this.userRepository.findOne({ where: { id: +id } });
    const user : User = await this.userRepository.findOneById(id);
    if (!user) {
       throw new NotFoundException(`User with ID ${id} not found`); 
      }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  //------------------ Delete by ID (Hard Delete) ------------------//
  async remove(id: number):Promise<{ message: string }> {
    const userToRemove = await this.userRepository.findOne({ where: { id: +id } });
    if (!userToRemove) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.userRepository.remove(userToRemove);
    return {
      message: `User with ID ${id} has been successfully removed`
    };
  }

  //------------------ Delete by ID (Soft Delete) ------------------//
  async softDelete(id: number):  Promise<{ user: User; message: string }>  {
    const deletedUser = await this.userRepository.findOne({ where: { id: +id }});
    if (!deletedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.userRepository.softDelete(id);
    return {
      user: deletedUser,
      message: `User with ID ${id} has been soft-deleted successfully.`,
    };
  }
}
