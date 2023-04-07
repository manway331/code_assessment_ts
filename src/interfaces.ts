import { TodoItem } from "./todo"

export interface IFetchData {
    fetchData:() => void
}

export interface ITodoClient {
    getTodos: () => Promise<TodoItem[]>
}