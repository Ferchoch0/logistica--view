import { useState } from 'react';
import '../assets/styles/DarkMode.css';

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <div>
            <label className="ui-switch">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <div className="slider">
                    <div className="circle"></div>
                </div>
            </label>
        </div>
    );
}

export default DarkMode;