import React from 'react'
import Container from './Container'
import Buttontheme from './Button-theme'

import '../styles/index.scss'

const Todolist = () => {
  return (
    <>
      <div className="darkmode_container">
        <div>
          <Container />
        </div>
        <Buttontheme />
      </div>
    </>
  );
}

export default Todolist;
