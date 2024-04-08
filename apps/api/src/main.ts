import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://gadingmurni.impach.tech'],
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(1945);
}
bootstrap();
