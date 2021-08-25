import { useState, useReducer, useEffect } from 'react';

const nfmt = new Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pfmt = new Intl.NumberFormat('en-AU', { style: 'percent', maximumFractionDigits: 4 });
const cfmt = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });

const formatResult = (number, unit) => {
    if (isNaN(number)) { number = 0; }

    switch (unit) {
        case 'days':
            return nfmt.format(number) + ' days';
            break;
        case 'years':
            return nfmt.format(number) + ' years';
            break;
        case '%':
            return pfmt.format(number);
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
        setfResult(props.alg(...Object.values(fStates)))
    }, [fStates, props])

    return (
        <div className="formula-inputs">
            <div className="formula-incont">
                {Object.entries(fStates).map(([k, v]) => (
                    <div key={k} className="formula-inbox">
                        <label htmlFor={k}>{k}</label>
                        <input type="number" inputMode="decimal" pattern="[0-9]*" name={k} value={v} onChange={handleInput} onFocus={e => e.target.select()} />
                    </div>
                ))}
            </div>
            <p>{formatResult(fResult, props.unit)}</p>
        </div>
    )
}