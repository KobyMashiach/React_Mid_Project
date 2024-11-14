import { useState, useEffect } from 'react';

function TodoComponentComp({ todo, onUpdate }) {
    return (
        <>
            <div style={{ border: 'solid 2px #8852b0', padding: "10px", display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                <div >
                    Title: {todo.title}<br />
                    Completed: {todo.completed.toString()}
                </div>
                {
                    !todo.completed && <button style={{ backgroundColor: "#ffe699" }} onClick={() => onUpdate(todo)}>Mark Completed</button>
                }
            </div>
            <br />
        </>
    );
}

export default TodoComponentComp;