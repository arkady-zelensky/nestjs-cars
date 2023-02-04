import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class CarEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  make: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  model: string;

  @Column({
    nullable: false,
    type: 'int',
  })
  year: number;

  @Column({
    nullable: true,
    type: 'float',
  })
  engine: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  city: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  color: string | null;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  vin: string;

  @Column({
    nullable: false,
    type: 'boolean',
    default: false,
  })
  broken: boolean;
}
