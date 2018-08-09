import React from 'react';
import InputText from '../Components/InputText';
import uuid from 'uuid';

export default class Input extends React.Component {
  inputRef = ref => this.input = ref;
  addItem = (e) => {
      // preventDefault to avoid page reload
    e.preventDefault();
    //trim input to make sure add valid Todo item
    const text = this.input.value.trim();
    console.log('text inside box', text);
    if (!text) return
    //add item
    const todo = {
      id: uuid(text),
      name: text,
      completed: false
    };
    this.props.addData(todo);

    //reset input value
    this.input.value = ''
  }

  render() {
    return <InputText
        inputRef={this.inputRef}
        addItem={this.addItem}
        showbtn={false}
    />
  }
}
