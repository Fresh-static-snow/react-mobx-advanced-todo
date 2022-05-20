import { useContext } from 'react';
import { StoreContext } from '../context';
import {TodoList} from "../store/todo-list";

export const useStore = (): TodoList => useContext(StoreContext);
