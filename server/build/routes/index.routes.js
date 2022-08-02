"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//config import {indexController} from "../controllers/indexController";
class IndexRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        // this.router.get('/',indexController.index);
        this.router.get('/', (reg, res) => res.send("hola clase"));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
