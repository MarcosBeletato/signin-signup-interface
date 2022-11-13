# Sign-in/Sign-up Interface

> #### This is an application developed with:
> - *node.js*
> - *express*
> - *mongoose*
> - *nodemon*
> - *MongoDB Atlas*


To run the application use the command line below:

```
npm run dev
```


You can use *Postman* to consume the API and the routes of the application are those:

> #### To register a new user:
> - It's required to pass the mail and a password on the requisition's body.
> ```
> http://localhost:3000/users
> ```
> #### To validate the login:
> - It's necessary to pass the parameters.
> ```
> http://localhost:3000/login?mail=[mail]&password=[password]
> ```


The objective of this project was to create an Rest API enabled to do the work of getting an **user's data** and saving it on an **cloud databank** (in this case *MongoDB Atlas*) so it could be possible to validate an login attempt afterwards.

> ###### Developed by:
> Marcos Beletato
>
>
> LinkedIn: *https://www.linkedin.com/in/marcosbeletato/*