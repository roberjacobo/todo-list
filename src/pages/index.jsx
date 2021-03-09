import React from 'react'
import Todolist from "../components/Todolist"
import ThemeProvider from "../context/ThemeProvider";

import '../styles/index.scss'

  const Index = () => {
    return (
      <>
        <ThemeProvider>
          <div className="wrapper">
            <Todolist />
          </div>
        </ThemeProvider>
      </>
    );
  }

  export default Index;
