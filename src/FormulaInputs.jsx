import { useState, useReducer, useEffect } from 'react';

export const FormulaInputs = (props) => {
    let fList = []
    let initial = {}
    for (const k of props.args) {
        initial[k] = 0
    }

    const [fStates, setfStates] = useReducer(
        (state, newState) => ({ ...state, ...newState })
        , initial);
    const [fResult, setfResult] = useState(0)

    const handleInput = (e) => {
        setfStates({ [e.target.name]: Number(e.target.value) })

    }

    useEffect(() => {
        console.log(fStates)
        setfResult(props.alg(...Object.values(fStates)))
    }, [fStates])

    return (
        <div className="formula-inputs">
            {Object.entries(fStates).map(([k, v]) => (
                <div key={k} className="formula-inbox">
                    <label htmlFor={k}>{k}</label>
                    <input type="number" pattern="[0-9]*" name={k} value={v} onChange={handleInput} onFocus={e => e.target.select()} />
                </div>
            ))}
            <p className="formula-result">{fResult}</p>
        </div>
    )
}