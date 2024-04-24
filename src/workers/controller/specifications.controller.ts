import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SpecificationsService } from '../providers/services/specifications.service';
import { CreateSpecificationsDto } from '../DTOs/create-specifications.dto';

@Controller('specifications')
export class SpecificationsController {
  constructor(private specificationsService: SpecificationsService) {}

  @Post()
  async createSpecifications(
    @Body() createSpecificationsDto: CreateSpecificationsDto,
  ) {
    return await this.specificationsService.create(createSpecificationsDto);
  }

  @Get(':id')
  async findOneByWorkerId(@Param('id') id: string) {
    return await this.specificationsService.findOneByWorkerId(id);
  }
}
