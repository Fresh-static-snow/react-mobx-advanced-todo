import { createContext } from 'react';
import {TodoList} from "./store/todo-list";

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;
