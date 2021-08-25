import { useState, useReducer, useEffect } from 'react';

const nfmt = new Intl.NumberFormat('en-AU');
const cfmt = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });

const formatResult = (number, unit) => {
    switch (unit) {
        case 'days':
            return nfmt.format(number) + ' days';
            break;
        case '$':
        default:
            return cfmt.format(number);
            break
    }
}

export const FormulaInputs = (props) => {
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
    }, [fStates, props])

    return (
        <div className="formula-inputs">
            {Object.entries(fStates).map(([k, v]) => (
                <div key={k} className="formula-inbox">
                    <label htmlFor={k}>{k}</label>
                    <input type="number" pattern="[0-9]*" name={k} value={v} onChange={handleInput} onFocus={e => e.target.select()} />
                </div>
            ))}
            <p className="formula-result">{formatResult(fResult, props.unit)}</p>
        </div>
    )
}