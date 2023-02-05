import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { Repository } from 'typeorm';

const memory = {
  cars: [],
};

@Injectable()
export class CarsService {
  // constructor(
  //   @InjectRepository(CarEntity)
  //   private readonly carsRepository: Repository<CarEntity>,
  // ) {}

  async getAll() {
    return memory.cars;
    // const res: Array<any> = await this.carsRepository.find();
    // const res: any[] = await this.carsRepository.find();
    // return res;
  }

  async getById(id: number) {
    return memory.cars.find((car) => car.id === id);
    // return this.carsRepository.findOne({
    //   where: {
    //     id,
    //   },
    // });
  }

  async createCar(dto: any): Promise<any> {
    if (memory.cars.length > 0) {
      dto.id = memory.cars[memory.cars.length - 1].id + 1;
    } else {
      dto.id = 1;
    }
    memory.cars.push(dto);
    return dto.id;
    // const res = await this.carsRepository.insert(dto);
    // return res.identifiers[0].id;
  }

  async updateCar(id: number, dto: any): Promise<void> {
    const ind = memory.cars.findIndex((car) => car.id === id);
    memory.cars[ind] = dto;
    // await this.carsRepository.update({ id }, dto);
  }

  async deleteById(id: number) {
    memory.cars = memory.cars.filter((car) => car.id !== id);
    // return this.carsRepository.delete({ id });
  }
}
