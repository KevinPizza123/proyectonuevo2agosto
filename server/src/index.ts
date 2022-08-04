import express, { Application } from 'express';
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routes/index.routes"
import productsRoutes from './routes/productsRoutes';


class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void { 
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use((express.json));
        this.app.use(express.urlencoded({extended:false}));

    }
    routes(): void { 
this.app.use('/', indexRoutes);
this.app.use('/api/products', productsRoutes);
    }
    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log("El puerto del servidor es:",this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();