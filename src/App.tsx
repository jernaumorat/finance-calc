import React, { useState, useReducer, ComponentState } from 'react';
import MathJax from 'react-mathjax';
import { formulae, Formula } from './formulae';

import { FormulaInputs } from './FormulaInputs'

import './App.css';

const FormulaBox = (props: Formula) => {
  return (
    <div className="Formula-Box">
      <h2 className="formula-content">{props.ttl}</h2>
      <MathJax.Provider>
        <MathJax.Node formula={props.mth} />
      </MathJax.Provider>
      <FormulaInputs alg={props.alg} args={props.args} />
    </div>
  )
}

interface GridProps {
  frms: Formula[]
}

const FormulaGrid = (props: GridProps) => {
  let fList: JSX.Element[] = []

  for (const formula of props.frms) {

    fList.push(<FormulaBox key={formula.ttl} {...formula} />)

  }

  return (
    <div className="Formula-Grid">
      {fList}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <FormulaGrid frms={formulae} />
    </div>
  );
}

export default App;
