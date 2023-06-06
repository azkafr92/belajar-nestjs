import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

/*
@Module() is a decorator that marks a class as a module
The @Module() decorator provides metadata that Nest uses to organize the application structure
Module encapsulates a closely related set of capabilities such as controllers, services, and providers
A module able to:
    - Import functionality from other modules
    - Export functionality so that it can be used by other modules
    - Provide services which can be injected into controllers or other providers
    - Have global and/or scoped providers
A module can be dynamic or static:
    - A dynamic module is a module that is configured asynchronously
    - A static module is a module that is configured synchronously
A module can be a root module or a child module:
    - Root/child module:
        - Root: starting point Nest uses to build the application dependency graph
        - Child: module that is imported by another module
    - Feature/shared module:
        - Feature: provides functionality to a specific feature
        - Shared: provides functionality that is shared across the application
    - Testing/non-testing module:
        - Testing: module that is used for testing, such as unit testing or e2e testing
            - Unit testing: testing a module in isolation
            - E2e testing: testing a module in the context of the entire application, end-to-end testing
        - Non-testing: module that is not used for testing, such as a module that is used to bootstrap the application
In this example, AppModule is a root module. It is also a static module, a feature module, and a non-testing module.
The reason is, respectively:
    - Starting point Nest uses to build the application dependency graph
    - Configured synchronously.
    - Provides functionality to a specific feature.
    - Not used for testing.
*/

@Module({
    // controllers is a property that defines the set of controllers that are provided by this module
    // It tells Nest.js to instantiate class inside the controllers list when creating the AppModule and available to other modules that import the AppModule
    // In this case, it makes the AppController class available to the main.ts file so that it can bootstrap the application
    controllers: [AppController],
})
export class AppModule {
}
