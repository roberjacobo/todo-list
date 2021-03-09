//TaskList — Es el componente que va a tener una lista de tareas por hacer o hechas, 
//donde va a poder eliminar todas las tareas que ya estén hechas.
import React from 'react'
import Checkbox from './Checkbox'

const Tasklist = props => {
  const { list, setList } = props

  const onClickRemoveItem = e => {
    const updatedList = list.filter(item => !item.done)
    setList(updatedList)
  }

  const onChangeStatus = e => {
    const { name, checked } = e.target
    const updatedList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }))
    setList(updatedList)
  }

  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ))

  return (
    <>
      <div className="todo-list">
          {list.length ? chk : "No tasks"}
        {list.length ? (
          <p>
            <button className="button blue" onClick={onClickRemoveItem}>
              Delete all done
            </button>
          </p>
        ) : null}
      </div>
    </>
  );
}

export default Tasklist;
