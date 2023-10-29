import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  create(createPersonDto: CreatePersonDto) {
    console.log(createPersonDto);
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    console.log('Service id', id);
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    console.log(updatePersonDto);
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
