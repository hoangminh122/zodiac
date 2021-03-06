import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {config} from 'dotenv'
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
  .setTitle("test Obderver")
  .setVersion('1.0')
  .addTag('Observers')
  .build();
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document)
  await app.listen(3000);
}
bootstrap();
