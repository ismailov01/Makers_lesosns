import { useState } from 'react';

const Input = ({getInp}) => {
    const [inp, setInp] = useState('')
    const handleAdd = () => {
        let obj = {
            name: inp, 
            id: Date.now()
        }
        getInp(obj)
        setInp('')
    }
    return (
        <div>
            <input value={inp} onChange={(e) => setInp(e.target.value)} type="text" />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Input;