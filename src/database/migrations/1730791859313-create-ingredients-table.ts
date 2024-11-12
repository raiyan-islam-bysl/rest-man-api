import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIngredientsTable1730791859313 implements MigrationInterface {
  name = 'CreateIngredientsTable1730791859313';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ingredient" (
        "id" SERIAL NOT NULL, 
        "name" character varying(100) NOT NULL, 
        "description" character varying, 
        "isActive" boolean NOT NULL, 
        "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, 
        "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, 
        "deletedAt" TIMESTAMP, 
        CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ingredient"`);
  }
}
