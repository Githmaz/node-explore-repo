import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Student } from './student/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Zandaru1',
    database: 'nest',
    entities: [Student],
    synchronize: true,
  }),StudentModule, AuthModule],
})
export class AppModule {}
