import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  id = 3;

  state = {
    value: '',
    todos: [
      { id: 0, text: '리액트', checked: false },
      { id: 1, text: '리덕스', checked: true },
      { id: 2, text: 'Typescript', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleClick = () => {
    const { value, todos } = this.state;
    this.setState({
      value: '',
      todos: todos.concat({
        id: this.id++,
        text: value,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const idx = todos.findIndex(todo => todo.id === id);
    const selected = todos[idx];

    const nextTodos = [...todos];
    
    nextTodos[idx] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const { value, todos } = this.state;
    const { handleChange, handleClick, handleKeyPress, handleToggle, handleRemove } = this;

    return (
      <TodoListTemplate form={<Form value={value} onChange={handleChange} onCreate={handleClick} onKeyPress={handleKeyPress} />}>
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
