import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * API settings
   */
  app.setGlobalPrefix('/api/v2');

  await app.listen(3010);
}
bootstrap();
