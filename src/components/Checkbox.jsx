//Checkbox — Es el componente que va a tener lo necesario para mostrar el checkbox, poder marcar / desmarcar una tarea
import React, { Fragment } from 'react';

import '../styles/components/checkbox.scss'

const Checkbox = props => {
  const {
    onChange,
    data: { id, description, done }
  } = props
  return (
    <Fragment>
      <label>
        <div className="task_container">
          <input
            name={id}
            type="checkbox"
            defaultChecked={done}
            onChange={onChange}
          />
          {description}
        </div>
      </label>
    </Fragment>
  );
}

export default Checkbox;
