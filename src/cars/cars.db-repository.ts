import { EntityRepository, Repository } from 'typeorm';
import { CarEntity } from './car.entity';
import { Injectable } from '@nestjs/common';

@EntityRepository(CarEntity)
export class CarsDbRepository
  extends Repository<CarEntity>
  implements ICarsRepository
{
  async findAll(): Promise<CarEntity[]> {
    return this.find();
  }

  async findCarById(id: number): Promise<CarEntity> {
    return this.findOne({
      where: {
        id,
      },
    });
  }

  async insertCar(dto: any): Promise<any> {
    const res = await this.insert(dto);
    return res;
  }

  async updateCar(id: number, dto: any): Promise<void> {
    await this.update({ id }, dto);
  }

  async deleteCar(id: number): Promise<void> {
    await this.delete({ id });
  }
}

export interface ICarsRepository {
  findAll(): Promise<CarEntity[]>;
  findCarById(id: number): Promise<CarEntity>;
  insertCar(dto: any): Promise<any>;
  updateCar(id: number, dto: any): Promise<void>;
  deleteCar(id: number): Promise<void>;
}
