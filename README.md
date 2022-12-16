<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Работа с README

Данный фаил можно читать двумя способами:
- Непостредственно в нашем репозитории (ищем файл README.md)
- Установить в VS Code расширение Markdown Preview Enhanced, далее найти в проекте файл README.md,открыть его и нажать ПКМ и выбрать Markdown Preview Enhanced  

## Установка
Для корректной работы react необходимо ввести команду

```bash
$ npm install
```

## Запуск приложения
```bash
# Запускаем первый терминал и переходим в папку src 
#(команда в терминале cd src) и запускаем сервер
$ npm run start:dev
```
```bash
# Запускаем второй терминал и переходим в папку client
#(команда в терминале cd client) и запускаем сервер
$ npm start
```

## Контроллеры
Необходимо удалить или закоментить строки где есть слово Api
Пример правильного запроса контроллера
```bash
@Post("/reg")
  @UsePipes(ValidationPipe)
  registration(@Body() userDto: CreateUserDto) {
    try{
      var otv = this.authService.registration(userDto);
      return otv 
    }
    catch(e){
      return e.message
    }
  }
```
Пример уже невалидного варианта
В данном случае убираются аннотации @ApiOperation и @ApiResponse
Найдите другие варианты аннотаций для Response
```bash
@ApiOperation({summary: 'Создание пациента'})
  @ApiResponse({status: 200, type: Patient})
  @UsePipes(ValidationPipe)
  @Post('create')
  create(@Body() patientDto: CreatePatientDto ){
    return this.patientsService.createPatient(patientDto)
  }
```

## Маршрутные константы

В файлик client/utils/consts.js прописываются константы, которые представляют из себя маршруты, что-то наподобии маршрутов в контроллерах
Называть можно как угодно, главное чтобы присутствовала логика
```bash
#Пример
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
```
В данном случае определены маршруты регистрации и авторизации, которые будут вбиваться в строке поиска для вызова определенных страниц.

## Страницы
Страницы создаются в папке client/pages
Для начала необходимо создать в папке файлик .js, с названием страницы например(Auth, Patient, Users и т.п.)
Внутрь созданного js файла запишем следующее
```bash
import React from 'react';

const НазваниеСтраницы = () => {
  return (
    <div>
      Какой-то текст
    </div>
  );
};

export default НазваниеСтраницы
```
На данный момент нет необходимости писать огромный код.


## Маршруты
В данном приложении реализованы два варианта типов маршрутов, для авторизованных пользователей и для неавторизованных.
Суть в том, чтобы неавторизованные пользователи не могли попасть на страницы пациентов, протоколов и т.п.
Итак, переходим в файл client/routes.js
В ней содержится два массива:
- authRoutes(там будут только маршруты и страницы доступные авториз. пользователям)
- publicRoutes(там будут только маршруты и страницы доступные НЕавториз. пользователям)

Пример
```bash
import {LOGIN_ROUTE,  REGISTRATION_ROUTE} from './utils/consts';
import Auth from "./pages/Auth";

export const authRoutes = []

export const publicRoutes = [
    {
        path: LOGIN_ROUTE, #Маршрутная константа
        Component: Auth #Страница из папки pages, которую должна вызывать маршрутная константа
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]
```
ВАЖНО!!!
Не забудьте в первый import добавить свои константы, и сделать import своих страниц

## Проверка работы маршрутов и страниц
Запускаем сервер и клиент, как было описано в начале

Вводим в строку запроса 'http://localhost:3000/' + Значение! маршрутной константы, которая запускает страницу.
Например http://localhost:3000/login или http://localhost:3000/registration

В положительном исходе должна открыться страница с каким-то текстом, но это только в случае если страница доступна НЕавториз. пользователям.

Чтобы проверить работу страниц для авторизованных пользователей ВРЕМЕННО!!! перенесите свой маршрут (файл client/routes.js) из массива authRoutes в publicRoutes а затем верните обратно.

## Ссылка на видео и таймкоды для верстки страниц
<a href="https://www.youtube.com/watch?v=H2GCkRF9eko">Видосик</a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=01h23m08s">Создание товаров (в нашем случае пациентов наверное) <u>Заготовка</u></a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=01h23m30s">Создание навигационной панели (потом мб пригодится) <u>Верстка</u></a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=01h33m18s">Создание страницы товаров (в нашем случае пациентов наверное) <u>Верстка</u></a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=01h45m23s">Создание страницы данных о товаре (в нашем случае данных пациентов или какая-то там карта наверное) <u>Верстка</u></a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=01h51m37s">Создание страницы добавления типов товаров (в нашем случае добавление пациентов) <u>Верстка</u></a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=02h15m25s">Получение и создание типов товара (в нашем случае пациентов наверное) <u>Связь с сервером</u></a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=02h21m51s">Создание страницы добавления типов товаров (в нашем случае добавление пациентов) <u>Связь с сервером</u></a>
- <a href="https://www.youtube.com/watch?v=H2GCkRF9eko#t=02h24m22s">Создание страницы добавления характеристик товаров (в нашем случае добавление характеристик пациентов) <u>Связь с сервером</u></a>

<a href="https://github.com/utimur/online-store-full-course">Ссылка на репозиторий чувака</a>


На этом всё
Запуск npm run dev
