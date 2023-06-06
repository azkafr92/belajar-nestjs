import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
bootstrap() is an asynchronous function that starts the application
Nest.js uses asynchronous operations to bootstrap the application because it is common for applications to require asynchronous operations during startup
For example, an application may need to connect to a database or fetch configuration from a remote server

async/await is a feature of JavaScript that allows asynchronous operations to be written in a synchronous style
It is easier to read and write, and it avoids the use of callbacks and promises
*/
async function bootstrap() {
    // NestFactory is a class that exposes a static method called create()
    // `create()` is used to create a Nest application instance and takes a module as an argument. In this case, the module is AppModule
    // `create()` returns a Promise that resolves to an application instance, `await` is used to wait for the Promise to resolve
    const app = await NestFactory.create(AppModule);

    // listen() is a method that starts the application
    // listen() takes a port number as an argument. In this case, the port number is 3000
    // listen() returns a Promise that resolves to void, `await` is used to wait for the Promise to resolve
    await app.listen(3000);
}

// Call the bootstrap() function to start the application
bootstrap();