const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const getAllData = require("./handlers/getAllData");
const addData = require("./handlers/addData");
const editData = require("./handlers/editData");
const deleteData = require("./handlers/deleteData");
const getSingleData = require("./handlers/getSingleData");

const routes = [
    {
        method: "GET",
        path: "/",
        handler: getAllData,
    },
    {
        method: "GET",
        path: "/{id}",
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.objectId(),
                }),
            },
        },
        handler: getSingleData,
    },
    {
        method: "POST",
        path: "/items/add",
        handler: addData,
    },
    {
        method: "PUT",
        path: "/items/edit/{id}",
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.objectId(),
                }),
            },
        },
        handler: editData,
    },
    {
        method: "DELETE",
        path: "/items/delete/{id}",
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.objectId(),
                }),
            },
        },
        handler: deleteData,
    },
];

module.exports = routes;
