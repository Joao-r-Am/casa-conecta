import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpecificationsDocument = HydratedDocument<Specifications>;

@Schema()
export class Specifications {
  @Prop()
  workerId: string;

  @Prop()
  workTime: number;

  @Prop()
  workDay: number;

  @Prop()
  availability: string;

  @Prop()
  specialty: string;
}

export const SpecificationsSchema =
  SchemaFactory.createForClass(Specifications);
