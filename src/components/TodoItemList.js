import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.todos !== nextProps.todos
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    ));

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;