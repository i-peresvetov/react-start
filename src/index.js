import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Make Awesome App', important: true},
        {label: 'Have a lunch', important: false},
    ]

    return (
        <div>            
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    )
}
// const el = React.createElement('h1', null, 'Hello World!!')

// ReactDOM.render(<App/>, document.getElementById("root"));
const root = createRoot(document.getElementById('root'))
root.render(<App/>)
