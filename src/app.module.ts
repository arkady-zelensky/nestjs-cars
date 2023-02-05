import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './cars/car.entity';
import * as fs from 'fs';
import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => {
    //     const options: TypeOrmModuleOptions = {
    //       type: 'postgres',
    //       host: configService.get('DB_HOST'),
    //       port: +configService.get<number>('DB_PORT'),
    //       username: configService.get('DB_USERNAME'),
    //       password: configService.get('DB_PASSWORD'),
    //       database: configService.get('DB_NAME'),
    //       entities: [CarEntity],
    //       synchronize: false,
    //       migrationsRun: false,
    //       logging: 'all',
    //     };
    //     if (configService.get('NODE_ENV') !== 'production') {
    //       const parts = __dirname.split(path.sep).slice(0, -2);
    //       parts.push('keys', 'DigiCertGlobalRootCA.crt.pem');
    //       const pathToCert = parts.join(path.sep);
    //       const DB_SSL_CERT = fs.readFileSync(pathToCert);
    //       (options as any).ssl = { ca: DB_SSL_CERT };
    //     }
    //     return options;
    //   },
    //   inject: [ConfigService],
    // }),
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
