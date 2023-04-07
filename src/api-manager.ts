import { IFetchData } from "./interfaces";
import { TodoItem } from "./todo";
import { TodoClient } from "./todo-client";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";

@injectable()
export class ApiManager implements IFetchData {
    private todoClient:TodoClient;
    constructor(@inject(TYPES.ITodoClient) todoClient:TodoClient){
        if(!todoClient){
            throw new Error("TodoClient should not be undefined or null");
            
        }
        this.todoClient = todoClient;
    }

    async fetchData(){
        try {
            var result = await this.todoClient.getTodos();
        } catch (error) {
            return '500';
        }
    
       return result;
    };
}