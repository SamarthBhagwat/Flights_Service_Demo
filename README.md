This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.


`src` -> Inside the source folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make seprate tests folder)


Lets take a look inside `src` folder 

- `config` -> In this folder, anything and everything regarding any configuration or setup of a library/module is done. For example, setting up `dotenv` so that we can use the environment variables in a cleaner fashion, this is done in the `port_config.js` file. One more example can be to setup your logging library that can help you to prepare meaningful logs, so configurations for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> They are kind of the last middlewares as post them you call your bussiness layer to execute the bussiness logic. In controllers, we just receive the incoming request and data and then pass it to the bussiness layer and once bussiness layer returns an output, we structure the api response in controllers and send the output.  

- `repositories` -> This folder contains all the logic using which we interact the DB by writing queries , all the raw queries or ORM queries go here.

- `services` -> contains the bussiness logic and interacts with repositories for data from database.

- `utils` -> contains helper methods, error classes etc. 


### Setup the project

- Download this template from github and open it in your favourite text editor.
- In root directory create a `.env` file and add the following env variables :
    ```
        PORT = <port number of your choice>
    ```

    ex:
    ```
        PORT = 3000
    ```