import { useState } from 'react'
import '../assets/styles/Loader.css';

function Loader() {
    const [loading, setLoading] = useState(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
        setLoading(false);
    }, 2000);

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black ${loading ? 'z-50' : 'hidden'}`}>
            <span class="loader"></span>
        </div>
    );
}

export default Loader;
