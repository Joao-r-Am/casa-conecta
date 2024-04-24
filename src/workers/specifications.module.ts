import { Module } from '@nestjs/common';
import { WorkersController } from './controller/worker.controller';
import { WorkerService } from './providers/services/workers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecificationsSchema } from './schemas/specifications.schema';
import { SpecificationsService } from './providers/services/specifications.service';
import { SpecificationsController } from './controller/specifications.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Especificacoes', schema: SpecificationsSchema },
    ]),
  ],
  controllers: [SpecificationsController],
  providers: [SpecificationsService],
})
export class SpecificationsModule {}
