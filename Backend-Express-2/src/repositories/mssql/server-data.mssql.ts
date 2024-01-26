import { IServerDataRepository } from '../server-data';
import { Context } from '../../context';
import { ServerData } from '../../models';

export class ServerDataRepositoryMssql implements IServerDataRepository {
  constructor(readonly context: Context) {
  }

  async retrieveServerData(): Promise<ServerData[]> {
    const query = 'SELECT TOP (1) ID as id, SERVER_VERSION as serverVersion, ENVIRONMENT as environment, ' +
      'ADDED_BY as addedBy, MODIFIED_BY as modifiedBy, ADDED_TIME as addedTime, MODIFIED_TIME as modifiedTime ' +
      'FROM [dbo].[SERVER_DATA] FOR JSON PATH';
    const a = this.context.db.executeQuery<ServerData>(query);
    
    try {
      a.then(r => console.log(r));
      return await a;
    } catch (err) {
      throw err;
    }
  }
}
