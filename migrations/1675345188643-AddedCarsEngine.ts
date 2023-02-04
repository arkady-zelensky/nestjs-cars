import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedCarsEngine1675345188643 implements MigrationInterface {
  name = 'AddedCarsEngine1675345188643';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cars" ADD "engine" double precision`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "engine"`);
  }
}
