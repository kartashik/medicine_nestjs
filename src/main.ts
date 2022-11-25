import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

async function bootstrap() {
  const PORT = 5000;
  const app = await  NestFactory.create<NestExpressApplication>(AppModule)
  //const errorMiddleware = require("./middlewares/error-middleware")
  //app.use(errorMiddleware)
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
});
  
  // И укажем, какой шаблонизатор использовать
  const config = new DocumentBuilder()
    .setTitle("Система для медицинского специалиста")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("DK Gang")
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs',app,document)


  await app.listen(PORT, ()=> console.log(`Сервер стартовал на порту = ${PORT}`))

}

bootstrap()