import React, {useState} from 'react';
import {useStore} from "../hooks/useStore";
import {onEnterPress} from "../hooks/useEnter";

export const TodoNew = () => {
    const [value, setValue] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        if(value !== ''){
            todoList.addTodo(value);
            setValue('');
        }
    };

    return (
        <div className="todo-new">
            <input type="text" value={value} onKeyUp={onEnterPress(addTodo)} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
};
