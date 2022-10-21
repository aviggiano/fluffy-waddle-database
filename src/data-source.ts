import "reflect-metadata";
import { DataSource } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST!,
  port: Number(process.env.POSTGRES_PORT!),
  username: process.env.POSTGRES_USERNAME!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DATABASE!,
  logging: Boolean(process.env.POSTGRES_LOGGING ?? false),
  synchronize: false,
  entities: [__dirname + "/**/*.entity.{js,ts}"],
});
