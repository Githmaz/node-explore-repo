import { ServerData } from '../models';

export interface IServerDataRepository {
  retrieveServerData(): Promise<ServerData[]>;
}
