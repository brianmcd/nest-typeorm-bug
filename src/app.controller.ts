import { Controller, Get } from '@nestjs/common';
import { CatRepository } from './cat.repository';

@Controller()
export class AppController {
  constructor(private readonly catRepo: CatRepository) {}

  @Get()
  async getCat(): Promise<string> {
    const cat = await this.catRepo.findOneOrFail(1);
    return cat.name;
  }
}
