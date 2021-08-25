import React from 'react';
import MathJax from 'react-mathjax';
import { formulae } from './formulae';

import { FormulaInputs } from './FormulaInputs'

import './App.css';

interface Formula {
  ttl: string,
  alg: Function,
  mth: string,
  args: string[],
  unit: string
}

const FormulaBox = (props: Formula) => {
  return (
    <div className="Formula-Box">
      <h2 className="formula-content">{props.ttl}</h2>
      <div className="formula-math">
        <MathJax.Provider>
          <MathJax.Node formula={props.mth} />
        </MathJax.Provider>
      </div>
      <FormulaInputs alg={props.alg} args={props.args} unit={props.unit} />
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
