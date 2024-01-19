import { IsEmail, IsNotEmpty, IsNumber, isNotEmpty } from "class-validator";

export class CreateUserDto {
    readonly name: string;

    @IsNotEmpty()
    readonly username:string;

    @IsEmail()
    readonly email: string;

    @IsNumber()
    readonly age: number;
}
