import '../styles/styles.css';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

const Join = () => { 
    const location = useLocation()

    return (
        <div>{location.pathname !=="/careers" && 
            <div className="mt-10 mb-10">
                <a href="mailto:hello@granola.team" className="py-4 px-8 rounded-lg text-yellow-300 no-underline text-2md 
                bg-slate-500">Reach out</a>
            </div>
            }
        </div>
    )
}

export default Join;
