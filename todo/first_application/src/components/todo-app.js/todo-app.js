import React from 'react';
import TodoSearch from '../todo-search/todo-search';
import ToDoList from '../todo-list/todo-list';
import TodoTitle from '../todo-title/todo-title';

class App extends React.Component {
  state = {
    todos: [
      {
        id:1,
        label: 'drink limonade',
        important: false
      },
      {
        id: 2,
        label:'make cake',
        important: true
      },
      {
        id: 3,
        label: 'write poems',
        important: false
      },
    ]
  }

  onImportantChange = (id) => {
    this.setState((oldState) => {
    const idx = oldState.todos.findIndex((item) => item.id === id)
     
    const oldTodo = oldState.todos[idx];
    const newTodo = {...oldTodo, important: !oldTodo.important}

    const prev = oldState.todos.slice(0, idx)
    const next = oldState.todos.slice(idx + 1)

    const newState = {
      todos: [...prev, newTodo, ...next]
    }
     return newState
  })
}

   render() {
      console.log('-----state-----', this.state)
    return (
      <div>
      <TodoTitle/>
      <TodoSearch/>
      <div>
      <h1> My Todo </h1>
      <ToDoList received_todos={this.state.todos} mayaFunksiya={this.onImportantChange} />
      </div>
      </div>
    );
  }
}
export default App;