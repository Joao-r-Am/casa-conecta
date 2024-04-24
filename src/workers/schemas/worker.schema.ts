import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Specifications } from '../interfaces/specifications';

export type WorkerDocument = HydratedDocument<Worker>;

@Schema()
export class Worker {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;
  @Prop()
  cpf: number;
  @Prop()
  birthDay: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Specifications' })
  specifications: Specifications;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
