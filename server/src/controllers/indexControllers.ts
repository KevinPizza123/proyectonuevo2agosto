import {Request,response,Response} from "express"

class IndexControllers{
    index(request:Request ,response:Response){
response.json({text: 'API los productos estab en api/controllers'})
    }
   
}
export const indexControllers = new IndexControllers();
