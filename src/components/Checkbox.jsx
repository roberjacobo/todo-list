//Checkbox — Es el componente que va a tener lo necesario para mostrar el checkbox, poder marcar / desmarcar una tarea
import React, { Fragment } from 'react';

const Checkbox = props => {
  const {
    onChange,
    data: { id, description, done }
  } = props
  return (
    <Fragment>
      <label className="todo new-item">
        <input
        className="todo__state"
        name={id}
        type="checkbox"
        defaultChecked={done}
        onChange={onChange}
        />
        <div className="todo__text">{description}</div>
      </label>
    </Fragment>
  );
}

export default Checkbox;
