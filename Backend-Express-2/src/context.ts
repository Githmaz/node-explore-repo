import { Config, EnvName } from './config';
import { Db, dbConnectionConfigFactory } from './models/server/db';
import { addApplicationInsightsLogger, loggerFactory } from './logger/logger';
import { ServerDataRepositoryMssql } from './repositories/mssql';
import { UserRepositoryMssql } from './repositories/mssql/user-auth.mssql';
import { IUserRepository } from './repositories/user-auth';

export class Context {
  readonly logger = loggerFactory(this.config);

  readonly db = new Db(dbConnectionConfigFactory(this.config));

  readonly serverDataRepository = new ServerDataRepositoryMssql(this)
  
  readonly userRepository:IUserRepository =  new UserRepositoryMssql(this);
  // define other repos here

  constructor(readonly config: Config) {
    addApplicationInsightsLogger(config);
  }

  get envName(): EnvName {
    return this.config?.env?.name;
  }
}

export function contextFactory(config: Config): Context {
  return new Context(config);
}
