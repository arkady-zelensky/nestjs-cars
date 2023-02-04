import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1675344944882 implements MigrationInterface {
  name = 'InitialMigration1675344944882';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cars" ("id" BIGSERIAL NOT NULL, "make" character varying(50) NOT NULL, "model" character varying(50) NOT NULL, "year" integer NOT NULL, "city" character varying(50) NOT NULL, "color" character varying(50), "vin" character varying(50) NOT NULL, "broken" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cars"`);
  }
}
