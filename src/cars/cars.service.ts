import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  // constructor(
  //   @InjectRepository(CarEntity)
  //   private readonly carsRepository: Repository<CarEntity>,
  // ) {}

  async getAll() {
    return [];
    // return this.carsRepository.query(`// select * from cars`);
    // const res: Array<any> = await this.carsRepository.find();
    // const res: any[] = await this.carsRepository.find();
    // return res;
  }

  async getById(id: number) {
    return {};
    // return this.carsRepository.query('select * from cars where id = $1', [id]);

    // return this.carsRepository.findOne({
    //   where: {
    //     id,
    //   },
    // });
  }

  async createCar(dto: any): Promise<any> {
    return 42;

    // const res = await this.carsRepository.insert(dto);
    // return res.identifiers[0].id;
  }

  async updateCar(id: number, dto: any): Promise<void> {
    // await this.carsRepository.update({ id }, dto);
  }

  async deleteById(id: number) {
    // return this.carsRepository.delete({ id });
  }
}
