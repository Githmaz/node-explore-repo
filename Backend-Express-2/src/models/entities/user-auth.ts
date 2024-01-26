import { BaseEntity } from './base-entity';

export interface User extends BaseEntity {
    id: number;
    email: string;
    password: string;
}
