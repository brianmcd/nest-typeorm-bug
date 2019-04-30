This repo demonstrates an issue with @nestjs/typeorm and custom repositories.

There's a Dockerfile included for a postgres database.  Create a database called `typeorm_test` inside it, then run the example with `yarn start:dev`.

You'll see that the app crashes because it can't find the custom repository.
