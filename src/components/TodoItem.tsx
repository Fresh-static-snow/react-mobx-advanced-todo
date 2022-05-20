import React, {useState} from 'react';
import TodoItemClass  from "../store/todo-item";
import {useStore} from "../hooks/useStore";
import {onEnterPress} from "../hooks/useEnter";

interface Props {
    todo: TodoItemClass;
}

export const TodoItem = ({todo}: Props) => {
    const todoList = useStore();
    const [value, setValue] = useState('');
    const [isEditing, setEdit] = useState(false);

    const saveText = () => {
      todo.updateText(value);
      setEdit(false);
      setValue('');
    };
    const isEmptyString = () => {
        if(value !== ''){
            saveText()
        } 
    } 

    return (
        <div className="todo-item">
            {
                isEditing ?
                    <div>
                        <input type="text" onKeyUp={onEnterPress(isEmptyString)} onChange={(e) => setValue(e.target.value)}/>
                        <button onClick={isEmptyString}>save</button>
                    </div>
                    :
                    <div>
                        <span>{todo.text}</span>
                        <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
                        <button onClick={() => setEdit(true)}>edit</button>
                        <button onClick={() => todoList.removeTodo(todo)}>X</button>
                    </div>
            }
        </div>
    )
};
