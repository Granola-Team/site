import '../styles/styles.css';
// import * as React from 'react';
// import { useLocation } from 'react-router-dom';

const Join = () => { 
/*
    const location = useLocation();
    {location.pathname !== "/careers" && 
    if (typeof window !== "undefined") {
    return <React.Fragment />
    }
*/
    return (
        <div>
            <div className="mb-10">
                <a href="mailto:hello@granola.team" className="py-4 px-8 rounded-lg text-yellow-300 no-underline text-2md 
                bg-slate-500">Join our team!</a>
            </div>
        </div>
    )
}

export default Join;
