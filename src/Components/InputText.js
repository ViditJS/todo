import React from 'react';
export default ({addItem, inputRef, showbtn}) => (
  <form className='input-form' onSubmit={addItem} >
    <input
      className='input-text'
      autoFocus={true}
      ref={inputRef}
      placeholder={showbtn ? '' : 'New'}
    />
    {!showbtn ? <input type='submit' className='add-btn' value='+' /> : null}
  </form>
)
