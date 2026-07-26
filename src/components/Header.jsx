import {Link} from 'react-router'
import { useState } from 'react'
export function Header() {
    const [open, setOpen] = useState(false);
    return (
        
        <div>
            {/*Navbar */}
            <div className="flex items-center justify-between bg-cyan-700/95 text-white p-4 shadow-md">
                <Link to="/" className="header-link">
                    <div className="text-lg font-black tracking-[0.2em]">S.S</div>
                </Link>
            
                {/*Desktop Navigation */}
                <div className="hidden sm:flex gap-6">
                    <Link to="/about" className="header-link">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em]">About me</span>
                    </Link>
                    <Link to="/events" className="header-link">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em]">Events</span>
                    </Link>
                    <Link to="/sports" className="header-link">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em]">Sports</span>
                    </Link>
                    <Link to="/projects" className="header-link">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em]">Projects</span>
                    </Link> 
                </div>
                <button className="text-xl cursor-pointer sm:hidden" onClick={() => setOpen(!open)}>
                    =
                </button>
            </div>
                {/*Mobile Navigation */}
                {open && (
                    <div className="flex flex-col gap-2 bg-cyan-700/95 p-8 text-white">
                        <Link to="/about" className="header-link">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">About me</span>
                        </Link>
                        <Link to="/events" className="header-link">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Events</span>
                        </Link>
                        <Link to="/sports" className="header-link">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Sports</span>
                        </Link>
                        <Link to="/projects" className="header-link">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Projects</span>
                        </Link>
                    </div>
                )}
            
        </div>
        
    )
}