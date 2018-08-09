import React from 'react';
import List from '../Components/List';
export default class ToDo extends React.Component {
  render(){
    return (
    <List {...this.props} />
  );
  }
}
