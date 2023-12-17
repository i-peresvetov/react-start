import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {

    const elemenst = todos.map((item)=>{
        return (
            <li>
                {/* <TodoListItem label={item.label} important={item.important}/> */}
                <TodoListItem {...item}/>
            </li>
        )
    })
  return (
    <ul>
        {elemenst}
    </ul>
  );
};

export default TodoList;