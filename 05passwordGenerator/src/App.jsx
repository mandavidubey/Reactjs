import React, { useState, useRef } from 'react';

function generatePassword(length, includeNumbers, includeSpecialChars) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) characters += '0123456789';
  if (includeSpecialChars) characters += '!@#$%^&*-_+=[]{}~`';

  let generatedPassword = '';
  for (let i = 0; i < length; i++) {
    generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return generatedPassword;
}

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generateNewPassword = () => {
    const newPassword = generatePassword(passwordLength, includeNumbers, includeSpecialChars);
    setPassword(newPassword);
  };

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    document.execCommand('copy');
  };

  return (
    <div className="w-full max-w-ld mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={passwordLength}
            className='cursor-pointer'
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <label>Length: {passwordLength}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeNumbers}
            id="numberInput"
            onChange={() => setIncludeNumbers(prev => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            id="characterInput"
            onChange={() => setIncludeSpecialChars(prev => !prev)}
          />
          <label htmlFor="characterInput">Special Characters</label>
        </div>
      </div>
      <button onClick={generateNewPassword} className="mt-3 bg-blue-700 text-white px-4 py-2 rounded-md">
        Generate New Password
      </button>
    </div>
  );
}

export default App;
