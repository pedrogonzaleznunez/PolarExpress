import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTrainDto } from './dtos/create-train.dto.js';
import { TrainsService } from './trains.service.js';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}

  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainsService.create(createTrainDto);
  }

  @Get()
  findAll() {
    return this.trainsService.findAll();
  }
}