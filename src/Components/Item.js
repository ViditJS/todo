import React from 'react';
/*
    Todo item component
 */
export default (props) => (
  <li className={props.Item.completed ? 'list-item completed' : 'list-item'} >
      <label id="text">{props.Item.name}</label>
      {!props.Item.completed ?
          // click to complete
          <button id="complete" onClick={props.completeItem(props.Item.key)}>O</button> :
          null
      }
      <button id="delete" onClick={props.deleteItem(props.Item.id)}>X</button>
  </li>
)
