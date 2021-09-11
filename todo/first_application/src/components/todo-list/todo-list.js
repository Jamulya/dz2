import React from 'react';
import ToDoItem from '../todo-item/todo-item';

const ToDoList = (props) => {
    const received_todos = props.received_todos;
    const mayaFunksiya = props.mayaFunksiya;

    const element = received_todos.map((item) => {
        return (
            <li key={item.id}>
                <ToDoItem label={item.label} important={item.important} mayaFunksiya={mayaFunksiya} />
            </li>
        )
    })

return (
    <div>
        <ul>
            {element}
        </ul>
    </div>
 );
};
export default ToDoList;