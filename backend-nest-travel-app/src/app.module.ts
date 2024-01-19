import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Zandaru1',
    database: 'travel',
    entities: [User],
    synchronize: true,
  }),UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
