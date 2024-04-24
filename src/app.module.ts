import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerSchema } from './workers/schemas/worker.schema';
import { WorkersController } from './workers/controller/worker.controller';
import { WorkerService } from './workers/providers/services/workers.service';
import { WorkerModule } from './workers/workers.module';
import { SpecificationsModule } from './workers/specifications.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://joaoamorim2766:GFh8LhMI6ovppyRa@casa-conecta.fx0lxcd.mongodb.net/',
    ),
    WorkerModule,
    SpecificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
