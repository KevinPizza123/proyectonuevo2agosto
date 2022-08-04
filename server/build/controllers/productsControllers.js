"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class ProductsControllers {
    index(request, response) {
        //response.send("hola clase desde products controllers ");
        database_1.default.query('Describe productos');
        response.json('prodcuts ');
    }
}
const productsControllers = new ProductsControllers();
exports.default = productsControllers;
