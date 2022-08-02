import { Router } from "express";
//config import {indexController} from "../controllers/indexController";
class IndexRoutes{
   public router:Router = Router();
constructor(){
this.config();
}
config():void{
    // this.router.get('/',indexController.index);
     this.router.get('/',(reg,res)=>res.send("hola clase"));

 }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router