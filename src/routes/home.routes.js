const  {Router} = require("express");

const homeRoutes = Router();

homeRoutes.get("/", (request, response) => {
    response.status(200).json({
        message: "Hello, you are accessing the '/home' route of my Notes API. Everything is okay here! :)",
        stack: "Node.js, Express, Knex, SQLite",
        author:  {
            name: "Rodrigo Louzada",
            github: "https://github.com/rodrigosLouzada",
            gitlab: "https://gitlab.com/rodrigosLouzada",
            linkedin: "https://www.linkedin.com/in/rodrigo-louzada-443b682a0/"
        }
    });
});


module.exports = homeRoutes;