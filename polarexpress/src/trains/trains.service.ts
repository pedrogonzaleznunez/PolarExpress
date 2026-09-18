import { Injectable, Logger } from '@nestjs/common';
import { CreateTrainDto } from './dtos/create-train.dto.js';

@Injectable()
export class TrainsService {
  private readonly trains : CreateTrainDto[]= [];
  private readonly logger = new Logger(TrainsService.name);

  create(train : CreateTrainDto) {

    this.trains.push(train);

    this.logger.log(`New train registered: ${train.name} (Model: ${train.model})`);
    
    return {
      message: 'Train saved succesfully',
      train: train,
      totalTrains: this.trains.length
    };
  }

  findAll() {
    return this.trains;
  }

}
