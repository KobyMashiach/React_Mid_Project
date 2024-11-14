import { useState, useEffect } from 'react';
import UserComponentComp from './user_component';

function LeftScreenSideComp({ users, onDelete, onUpdate, onSelectId, selectedId, onAddUser }) {


    const [filteredUsers, setFilteredUsers] = useState(users || []);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const onSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const updatedUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchValue) || user.email.toLowerCase().includes(searchValue)
        );
        setFilteredUsers(updatedUsers);
    };



    return (
        <div style={{ border: "solid 1px black", borderRadius: "40px", padding: "12px", display: "inline-block", width: '400px' }}>
            Search:
            <input
                type="search"
                style={{ margin: "0 10px" }}

                onChange={onSearch}
            />
            <button style={{ backgroundColor: "#ffe699" }} onClick={onAddUser}>Add</button>
            <br /><br />
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                    <UserComponentComp key={user.id}
                        user={user}
                        selectedId={selectedId}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        onSelectId={onSelectId}
                    />
                ))
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
}

export default LeftScreenSideComp;
