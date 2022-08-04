import {Router} from "express";
import productsControllers from "../controllers/productsControllers"

class ProductsRoutes{
   public router:Router = Router();
constructor(){
this.config();
}
config():void{
    // this.router.get('/',indexController.index);
     this.router.get('/', productsControllers.index);

 }
}
const productsRoutes = new ProductsRoutes();
export default productsRoutes.router 