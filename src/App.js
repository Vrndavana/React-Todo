import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const toDo = [
  
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: toDo,
      newItem: ''
    }
  }
  toggleItem = id => {
    const newToDo = this.state.toDoList.map( item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item
      } else {
        return item;
      }

    });
    this.setState({newToDo});
  }
    removeCompleted = () => {
        const newTask = this.state.toDoList.filter( item => !item.completed)
        this.setState({
          toDoList: newTask
        }) 
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
          removeCompleted={this.removeCompleted}
          />
      </div>
    );
  }
}
export default App;