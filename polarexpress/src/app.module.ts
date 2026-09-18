import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TrainsModule } from './trains/trains.module.js';

@Module({
  imports: [TrainsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
