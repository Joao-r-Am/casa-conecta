import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkerDto } from 'src/workers/DTOs/create-worker.dto';
import { Worker } from 'src/workers/interfaces/worker';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel('CasaConectas') private readonly workerModel: Model<Worker>,
  ) {}

  async findAll() {
    return await this.workerModel.find().exec();
  }

  async findOneByName(name: string) {
    return await this.workerModel.findOne({ name: name }).exec();
  }

  async create(createWorkerDto: CreateWorkerDto) {
    try {
      const createWorker = (
        await this.workerModel.create(createWorkerDto)
      ).save();
      return createWorker;
    } catch (err) {
      throw new Error(err);
    }
  }
}
