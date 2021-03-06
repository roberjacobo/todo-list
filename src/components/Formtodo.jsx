//FormTodo — Es el componente donde vamos a escribir una tarea, y vamos a poder agregarla.
import React, { useState } from 'react';

const Formtodo = props => {

  const [description, setDescription] = useState("")

  const { handleAddItem } = props

  const handleSubmit = e => {
    e.preventDefault()

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    })
    setDescription("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="todo-list">
          <div className="file-input">
            <input 
            type="text"
            className="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <button
            className="button pink"
            disabled={description ? "" : "disabled"}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Formtodo;
