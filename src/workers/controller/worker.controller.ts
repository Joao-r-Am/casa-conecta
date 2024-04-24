import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateWorkerDto } from 'src/workers/DTOs/create-worker.dto';
import { WorkerService } from 'src/workers/providers/services/workers.service';
import { Worker } from 'src/workers/interfaces/worker';

@Controller('worker')
export class WorkersController {
  constructor(private service: WorkerService) {}

  @Get()
  async findAll(): Promise<Worker[]> {
    return await this.service.findAll();
  }

  @Get('search')
  async findOneByName(@Body('name') name: string) {
    try {
      const worker = await this.service.findOneByName(name);
      return worker;
    } catch (err) {
      console.log(err);
    }
  }

  @Post()
  async create(@Body() createWorkerDto: CreateWorkerDto) {
    try {
      return await this.service.create(createWorkerDto);
    } catch (err) {
      console.log(err);
    }
  }
}
