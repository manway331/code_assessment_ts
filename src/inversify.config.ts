import { Container } from "inversify";
import { TYPES } from "./types";
import { ITodoClient} from "./interfaces";
import {ApiManager} from './api-manager';
import {TodoClient} from './todo-client';

const container = new Container();
container.bind<ITodoClient>(TYPES.ITodoClient).to(TodoClient);
container.bind<ApiManager>(ApiManager).toSelf();

export { container };