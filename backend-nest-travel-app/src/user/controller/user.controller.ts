import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, ParseIntPipe } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { promises } from 'dns';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //------------------ Add a new User ------------------//
  @Post()
  async create(@Body() createUserDto: CreateUserDto):Promise<User> {
    return  await this.userService.create(createUserDto);
  }

  //------------------ Get All Users ------------------//
  @Get()
  async findAll(): Promise<{ Users: User[] }> {
    return await this.userService.findAll();
  }

  //------------------ Get User By ID ------------------//
  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

   //------------------ Delete by ID (Soft Delete) ------------------//
   @Delete(':id')
   softDelete(@Param('id') id: string) {
     return this.userService.softDelete(+id);
   }

  // ------------------ Delete by ID (Hard Delete) ------------------//
  @Delete('hard/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

}
