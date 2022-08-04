import {Request,response,Response, text} from "express"
import pool from "../database/database" ;

class ProductsControllers{
    public index(request:Request ,response:Response){
//response.send("hola clase desde products controllers ");
pool.query('Describe productos')
response.json('prodcuts ')
    }
   
}
const productsControllers = new ProductsControllers();
export default productsControllers;