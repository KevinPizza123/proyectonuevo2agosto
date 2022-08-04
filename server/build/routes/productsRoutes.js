"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControllers_1 = __importDefault(require("../controllers/productsControllers"));
class ProductsRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        // this.router.get('/',indexController.index);
        this.router.get('/', productsControllers_1.default.index);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
