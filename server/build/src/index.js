"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
class Server {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
        this.app.use('/', index_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("El puerto del servidor es:", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
