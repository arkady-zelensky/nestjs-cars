import { Injectable } from '@nestjs/common';

const memory = {
  cars: [],
};

@Injectable()
export class CarsService {
  async getAll() {
    const cars: any[] = memory.cars;
    // const cars: Array<any> = memory.cars;
    return cars;
  }

  async getById(id: number) {
    return memory.cars.find((car) => car.id === id);
  }

  async createCar(dto: any): Promise<any> {
    if (memory.cars.length > 0) {
      dto.id = memory.cars[memory.cars.length - 1].id + 1;
    } else {
      dto.id = 1;
    }
    memory.cars.push(dto);
    return dto.id;
  }

  async updateCar(id: number, dto: any): Promise<void> {
    const ind = memory.cars.findIndex((car) => car.id === id);
    memory.cars[ind] = dto;
  }

  async deleteById(id: number) {
    memory.cars = memory.cars.filter((car) => car.id !== id);
  }
}
