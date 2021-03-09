//Container — Es el componente que va a pasar FormTodo a TaskList.
import React, { useState, useContext } from 'react'

import '../styles/components/container.scss'

import Formtodo from './Formtodo'
import Tasklist from './Tasklist'

import ThemeContext from '../context/ThemeContext';
import ButtonTheme from './Button-theme'

const Container = () => {

  const { dark } = useContext(ThemeContext);

  const [list, setList] = useState([])
  const handleAddItem = addItem => {
    setList([...list, addItem])
  }
  return (
    <div className="grid-container">
      <div className="box-1">Header</div>
      <div className="box-2">Main
              <Formtodo handleAddItem={handleAddItem} />
        <Tasklist list={list} setList={setList} />
      </div>
      <div className="box-3">Footer</div>
    </div>
  );
}

export default Container