import React, { useState } from "react";
import './Password.css';

const Password = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8); 
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

    const generatePassword = () => {
        let charSet = '';

        if (includeUppercase) charSet += uppercaseChars;
        if (includeLowercase) charSet += lowercaseChars;
        if (includeNumbers) charSet += numberChars;
        if (includeSpecialChars) charSet += specialChars;

        if (charSet === '') {
            alert("Please select at least one character type.");
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }
        setPassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    };

    return (
        <div className="password-generator">
            <h1>Password Generator</h1>

            <div className="password-output">
                <input type="text" value={password} readOnly placeholder="Generated password" />
                <button onClick={copyToClipboard}>Copy</button>
            </div>

            <div className="controls">
                <label>Password Length: {length}</label>
                <input
                    type="range"
                    min="4"
                    max="32"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />

                <div className="checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={includeUppercase}
                            onChange={() => setIncludeUppercase(!includeUppercase)}
                        />
                        Include Uppercase
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeLowercase}
                            onChange={() => setIncludeLowercase(!includeLowercase)}
                        />
                        Include Lowercase
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                        Include Numbers
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeSpecialChars}
                            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                        />
                        Include Special Characters
                    </label>
                </div>
            </div>

            <button className="generate-btn" onClick={generatePassword}>
                Generate Password
            </button>
        </div>
    );
};

export default Password;
