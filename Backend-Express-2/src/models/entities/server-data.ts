import { BaseEntity } from './base-entity';

export interface ServerData extends BaseEntity {
  serverVersion: string;
  environment: string;
}
