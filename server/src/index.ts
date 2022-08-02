import express, { Application } from 'express';
import indexRoutes from "./routes/index.routes"

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void { 
        this.app.set('port', process.env.PORT || 3000);
    }
    routes(): void { 
this.app.use('/', indexRoutes);
    }
    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log("El puerto del servidor es:",this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();