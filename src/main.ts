import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);
  console.log('Starting app on port ' + port);
  await app.listen(port);
}
bootstrap();
