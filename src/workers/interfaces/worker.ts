import { Specifications } from './specifications';

export interface Worker {
  name: string;
  email: string;
  phone: string;
  cpf: number;
  birthDay: Date;
  specifications: Specifications;
}
