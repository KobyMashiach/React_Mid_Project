import { useState, useEffect } from 'react';
import MoreUserDataComp from './more_user_data';

function UserComponentComp({ user, onDelete, onUpdate, onSelectId, selectedId }) {

    const [haveNotCompleted, setHaveNotCompleted] = useState(false);
    const [moreData, setMoreData] = useState(false);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);


    useEffect(() => {
        const checkHaveNotCompleted = () => {
            setHaveNotCompleted(user.todos.some(val => val.completed == false))
        }
        checkHaveNotCompleted();

    }, [user]);

    const handleAddressChange = (updatedAddress) => {
        setAddress(updatedAddress);
    };

    return (
        <>
            <div style={{ padding: "0px 10px 5px 10px", border: `solid, 2px ${haveNotCompleted ? 'red' : 'green'}`, backgroundColor: `${selectedId == user.id ? '#f8cbad' : 'white'}` }}>
                <span onClick={() => onSelectId(user.id)}>ID: {user.id}</span><br />
                Name: <input type='text' defaultValue={user.name} onChange={(e) => setName(e.target.value)} ></input><br />
                Email: <input type='text' defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} ></input><br />
                <div style={{ display: 'flex', flexDirection: `${moreData ? 'column' : 'row'}`, justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <button style={{ backgroundColor: "#bfbfbf", height: "30px" }} onMouseOver={() => setMoreData(true)} onClick={() => setMoreData(false)}>Other Data</button>
                    </div>
                    {moreData ? (<MoreUserDataComp address={address} onAddressChange={handleAddressChange} />) : null}
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{ height: "30px", backgroundColor: "#ffe699" }} onClick={() => onUpdate({ ...user, name, email, address })}>Update</button>
                        <button style={{ height: "30px", backgroundColor: "#ffe699" }} onClick={() => onDelete(user)}>Delete</button>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default UserComponentComp;