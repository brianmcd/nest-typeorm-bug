import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CatRepository } from './cat.repository';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([CatRepository])],
  controllers: [AppController],
})
export class AppModule {}
