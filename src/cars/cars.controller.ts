import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('/')
  async getAll(): Promise<any[]> {
    return this.carsService.getAll();
  }

  @Get('/:id')
  async getOne(@Param() params: { id: string }): Promise<any> {
    return this.carsService.getById(+params.id);
  }

  @Post('/')
  async crateOne(@Body() body: any): Promise<any> {
    return this.carsService.createCar(body);
  }

  @Put('/:id')
  async updateOne(
    @Param() params: { id: string },
    @Body() body: any,
  ): Promise<void> {
    await this.carsService.updateCar(+params.id, body);
  }

  @Delete('/:id')
  async deleteOne(@Param() params: { id: string }): Promise<any> {
    await this.carsService.deleteById(+params.id);
  }
}
