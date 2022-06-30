import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Employees1656278392661 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()"
          },
          {
            name: "cpf",
            type: "varchar(11)",
            isUnique: true
          },
          {
            name: "name",
            type: "varchar(200)",
          },
          {
            name: "email",
            type: "varchar(200)",
            isUnique: true,
          },
          {
            name: "avatar",
            type: "varchar"
          },
          {
            name: "biografia",
            type: "varchar",
          },
          {
            name: "senha",
            type: "varchar"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees')
  }

}
