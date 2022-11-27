import { AppDataSource } from "./data-source";

import { Report, Tool } from "./entities/Report.entity";
import { Contract } from "./entities/Contract.entity";
import { Auditor } from "./entities/Auditor.entity";
import { Audit } from "./entities/Audit.entity";
import { Finding, Severity } from "./entities/Finding.entity";
import { Blockchain, Explorer } from "./entities/Blockchain.entity";
import { Statistic } from "./entities/Statistic.entity";
import { Logger } from "tslog";

const log = new Logger();

export async function connect(): Promise<void> {
  if (!AppDataSource.isInitialized) {
    log.info("Connecting to Postgres...");
    await AppDataSource.initialize();
  }
}

export async function disconnect(): Promise<void> {
  if (AppDataSource.isInitialized) {
    log.info("Disconnecting from Postgres...");
    await AppDataSource.destroy();
  }
}

export {
  Report,
  Contract,
  Blockchain,
  Statistic,
  Explorer,
  Tool,
  Auditor,
  Audit,
  Finding,
  Severity,
};

export default AppDataSource;
