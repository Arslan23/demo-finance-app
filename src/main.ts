import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const port = process.env.PORT;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  });
  const config = new DocumentBuilder()
  .setTitle('Vf app ressources')  
  .setDescription('The VF API description')
  .setVersion('1.0')
  .addTag('vfapp')
  .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  
  await app.listen(port);
}
bootstrap();
