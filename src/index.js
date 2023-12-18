import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
        {label: 'Travel to work', important: false, id: 4}
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
