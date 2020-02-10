import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


// Const Array - TODO ITEMS
const toDo = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];


// Class Components
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      toDoList: toDo,
      newItem: ''
    }
  }

  toggleItem = clickedId => {
    const newToDo = this.state.toDoList.map( item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }

    });
    this.setState({
      toDoList: newToDo
    });
  }

    addNewItem = itemText => {
      const newItem = {
        task: itemText,
        id: Date.now(),
        completed: false
      }
      this.setState({
        toDoList: [...this.state.toDoList, newItem]
      })
    }
    handleChanges = e => {
      this.setState({
          newItem: e.target.value
      });
  };
  handleSubmit = e => {
      e.preventDefault();
      this.addNewItem(this.state.newItem);
      this.setState({ newItem: '' });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        <ToDoForm 
        addNewItem={this.addNewItem} 
        handleChanges={this.handleChanges}
        handleSubmit={this.handleSubmit}
        />
        </div>
        <ToDoList
          toDo={this.state.toDoList}
          toggleItem={this.toggleItem}
          />
      </div>
    );
  }
}

export default App;
