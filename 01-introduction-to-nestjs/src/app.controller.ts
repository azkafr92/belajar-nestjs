import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query } from '@nestjs/common';

// Controller is responsible for handling incoming requests and returning responses to the client
// @Controller is a decorator that marks a class as a Controller
// @Controller takes an optional argument that specifies the route prefix for all routes defined within the controller
// Example: @Controller('api/v1/users') will prefix all routes within the controller with /api/v1/users

@Controller('/api/v1/users')
export class AppController {
    // @Get() is a decorator that marks a method as a request handler for GET requests
    @Get()
    findAll(
        // @Query() is a decorator that marks a method parameter as a query parameter
        @Query('email') email: string
    ): Object {
        return {
            code: 200,
            message: `This action returns all users filtered by email containing: ${email}`,
        };
    }

    // Route parameters are defined by prefixing a path segment with a colon
    // Example: :userId defines a route parameter named userId
    // If no route is specified, the default route / is used
    @Get('/:userId')
    findOne(
        // @Param() is a decorator that marks a method parameter as a route parameter
        // To extract a single parameter, pass the name of the parameter to @Param()
        // Example: @Param('userId') will extract the userId parameter
        @Param('userId') userId: string
    ): Object {
        return {
            code: 200,
            message: `This action returns a user with id ${userId}`
        };
    }

    // @Post() is a decorator that marks a method as a request handler for POST requests
    @Post()
    create(
        // @Body() is a decorator that marks a method parameter as a request body
        // @Body() takes an optional argument that specifies the type of the body
        // Example: @Body() body: CreateUserDto will validate the body against the CreateUserDto class
        @Body() body: any
    ): Object {
        return {
            code: 201,
            message: 'This action adds a new user',
            data: body,
        };
    }

    // @Patch() is a decorator that marks a method as a request handler for PATCH requests
    // Patch is used to partially update an existing resource
    // Example: /users/1/password will update the password for the user with id 1
    @Patch('/:userId/password')
    update(
        // To extract all parameters, use @Param() without any arguments
        @Param() params: any,
        @Body() body: any
    ): Object {
        return {
            code: 200,
            message: `This action updates password of a user's with id ${params.userId} with ${body.password}`
        };
    }

    // @Put() is a decorator that marks a method as a request handler for PUT requests
    // Put is used to completely replace an existing resource
    // Example: /users/1 will replace all the data for the user with id 1
    @Put('/:userId')
    replace(
        @Param('userId') userId: string,
        @Body() body: any
    ): Object {
        return {
            code: 200,
            message: `This action replaces data of a user with id ${userId}`,
            data: body,
        };
    }

    // The default response status code is 200 OK, except for POST requests which default to 201 Created
    // The response status code can be changed by chaining the @HttpCode() decorator
    @HttpCode(204)
    // @Delete() is a decorator that marks a method as a request handler for DELETE requests
    @Delete('/:userId')
    remove(@Param() params: any): void {
        // If the response status code is 204, the response body will be empty, even if a body is returned
    }
}
