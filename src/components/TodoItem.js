import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.checked !== nextProps.checked;
  }

  render() {

    const { id, text, checked, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => { e.stopPropagation(); onRemove(id) }}>X</div>
        <div className={`todo-text ${checked && 'checked'}`}>{text}</div>
        {checked && (<div className="check-mark">V</div>)}
      </div>
    );
  }
}

export default TodoItem;