import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>,){}

  async create(createUserDto: CreateUserDto) :Promise<User> {
    const newUser = this.userRepository.create({...createUserDto});
    return this.userRepository.save(newUser);
   
  }

  async findAll():Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    
    const user = await this.userRepository.findOne({ where: { id: +id } });
    if (!user) { throw new NotFoundException(`User with ID ${id} not found`); }
  
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
