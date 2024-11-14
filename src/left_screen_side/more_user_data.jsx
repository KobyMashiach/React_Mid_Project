import { useState, useEffect } from 'react';

function MoreUserDataComp({ address, onAddressChange }) {

    const handleChange = (field, value) => {
        onAddressChange({
            ...address,
            [field]: value,
        });
    };


    return (
        <>
            <br />
            <div style={{ border: "solid 1px black", borderRadius: "24px", padding: "10px", display: "inline-block", backgroundColor: "#f2f2f2" }}>
                Street: <input type='text' value={address?.street ?? ""} onChange={(e) => handleChange('street', e.target.value)} /><br />
                City: <input type='text' value={address?.city ?? ""} onChange={(e) => handleChange('city', e.target.value)} /><br />
                Zip Code: <input type='text' value={address?.zipcode ?? ""} onChange={(e) => handleChange('zipcode', e.target.value)} /><br />
            </div>
        </>
    );
}

export default MoreUserDataComp;