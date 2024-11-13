import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecipeTable1731483495262 implements MigrationInterface {
    name = 'CreateRecipeTable1731483495262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE "recipe" (
            "id" SERIAL NOT NULL, 
            "name" character varying(100) NOT NULL, 
            "description" character varying, 
            "isActive" boolean NOT NULL, 
            "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, 
            "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, 
            "deletedAt" TIMESTAMP, 
            CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "recipe"`);
    }

}
