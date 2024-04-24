import { Module } from '@nestjs/common';
import { WorkersController } from './controller/worker.controller';
import { WorkerService } from './providers/services/workers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerSchema } from './schemas/worker.schema';
import { SpecificationsModule } from './specifications.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CasaConectas', schema: WorkerSchema }]),
  ],
  controllers: [WorkersController],
  providers: [WorkerService],
})
export class WorkerModule {}
