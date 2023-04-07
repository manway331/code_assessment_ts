import { TodoItem } from "./todo";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { ITodoClient } from "./interfaces"
import { TYPES } from "./types";

@injectable()
export class TodoClient implements ITodoClient {
    async getTodos() {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await result.json() as TodoItem[];
        return json;
    };
    
}