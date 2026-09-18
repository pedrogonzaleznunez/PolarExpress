import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades que no estén definidas en el DTO
      forbidNonWhitelisted: true, // Lanza error si envían propiedades no permitidas
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
