import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carsRepository: Repository<CarEntity>,
  ) {}

  async getAll() {
    return this.carsRepository.query(`select * from cars`);
    // return this.carsRepository.find();
  }

  async getById(id: number) {
    return this.carsRepository.query('select * from cars where id = $1', [id]);
    // return this.carsRepository.findOne({
    //   where: {
    //     id
    //   }
    // });
  }

  async createCar(dto: any): Promise<any> {
    return this.carsRepository.query(
      `insert into cars (make, model, year, city, color, vin, broken) values ($1, $2, $3, $4, $5, $6, $7);`,
      [dto.make, dto.model, dto.year, dto.city, dto.color, dto.vin, dto.broken],
    );
    // const res = await this.carsRepository.insert(dto);
    // return res.identifiers[0].id;
  }

  async updateCar(id: number, dto: any): Promise<void> {
    await this.carsRepository.update({ id }, dto);
  }

  async deleteById(id: number) {
    return this.carsRepository.delete({ id });
  }
}
