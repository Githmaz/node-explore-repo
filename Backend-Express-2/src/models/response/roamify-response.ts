import { BaseEntity } from '../entities/base-entity';
import { ErrorCode } from './error-code';

export interface RoamifyResponse<T extends BaseEntity[]> {
  status: ErrorCode;
  message: string;
  data: T;
}
