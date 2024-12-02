import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import useLocalStorage from "../Components/UseLocalStorage";



function CharacterPage() {
    const [characters, setCharacters] = useState('');
    const [settings, setSettings] = useState('');

    const handleSelectChange = (event) => {
        setCharacters(event.target.value);
        setSettings(event.target.value);
    };


    return (
        <>
        <Navbar />
        <br />
    <br />
    <br />
    <div className="personal-top">
    <h1>Characters</h1>
    </div>
    <select onChange={handleSelectChange}>
        <option value="realistic">Realistic setting</option>
        <option value="fantasy">Fantasy setting</option>
    </select>
    <select onChange={handleSelectChange}>
        <option value="human">Human</option>
        <option value="non-human">Non-Human</option>
    </select>
        </>
    );
}


export default CharacterPage;