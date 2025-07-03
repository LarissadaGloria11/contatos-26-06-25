const { version } = require("mongoose");
const swaggerJSDOC = require("swagger-jsdoc");

const options = {

    definition:{
        openai: '3.0.0',
        info:{
            title: 'API DE CONTATOS',
            version: '1',
            descroption: 'Documentação de API utilizando Swagger'
        },
    },

    apis:['./routes/*.js']
}

const swaggerSpec = swaggerJSDOC(options);

module.exports  = swaggerSpec