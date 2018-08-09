import React from 'react';
import '../Styles/app.css';
import TitleComponent from '../Components/Title';
import Input from './Input';
import ToDo from './ToDoList';
export default class TodoApp extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          items: []
      }
  }
    /*
      add todo item to list
      */
  addData = item => {
    return this.setState(prev =>
        ({items: [...prev.items, item]})
    )

  }
  /*
   find out which item should be deleted then delete
   */
  deleteItem =
    id =>
      () =>
        this.setState(prev =>
            ({
              items: prev.items.filter(
                item => item.id !== id
              )
            })
        )

  //   find out which item should be completed then complete
  // implement curry function
  completeItem =
    id =>
      () =>
        this.setState(prev => {
            prev.items.forEach(item =>
                item.id === id ? item.completed = true : null
            );
            return prev;
          }
        )

  //      complete all items by click one time
  //    */
  completeAll = () =>
    this.setState(
      prev => {prev.items.forEach(item => item.completed = true)
        return prev;
      }
    )
  //   /*
  //      remove all items by click one time
  //    */
  clearCompleted = () =>
    this.setState(
      prev => ({items: prev.items.filter(item => !item.completed)})
    )

  render (){
    return <div className="container">
          <Input addData={this.addData}/>
          <ToDo items={this.state.items}
                  deleteItem={this.deleteItem}
                  completeItem={this.completeItem}
                  completeAll={this.completeAll}
                  clearCompleted={this.clearCompleted}/>
      </div>
  }
}
