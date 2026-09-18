import { Module } from '@nestjs/common';
import { TrainsController } from './trains.controller.js';
import { TrainsService } from './trains.service.js';

@Module({
  controllers: [TrainsController],
  providers: [TrainsService]
})
export class TrainsModule {}
