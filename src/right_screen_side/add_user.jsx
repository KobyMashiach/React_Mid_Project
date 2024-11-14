import { useState, useEffect } from 'react';

function AddUserComp({ cancel, addUser }) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();


    return (
        <>
            Name: <input type='text' onChange={(e) => setName(e.target.value)}></input><br /><br />
            Email: <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
            <br /><br />
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button style={{ backgroundColor: "#ffe699" }} onClick={cancel}>Cancel</button>
                <button style={{ backgroundColor: "#ffe699" }} onClick={() => addUser({ name, email })}>Add</button>
            </div>
        </>
    );
}

export default AddUserComp;