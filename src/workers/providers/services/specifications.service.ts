import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecificationsDto } from 'src/workers/DTOs/create-specifications.dto';
import { Specifications } from 'src/workers/interfaces/specifications';

@Injectable()
export class SpecificationsService {
  constructor(
    @InjectModel('Especificacoes')
    private readonly specificationsModel: Model<Specifications>,
  ) {}

  async create(createSpecificationsDto: CreateSpecificationsDto) {
    const specifications = new this.specificationsModel(
      createSpecificationsDto,
    );
    return await specifications.save();
  }

  async findOneByWorkerId(id: string) {
    const specifications = await this.specificationsModel.findOne({
      workerId: id,
    });
    return specifications;
  }
}
