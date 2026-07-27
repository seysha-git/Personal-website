import {Link} from 'react-router'
import { useState } from 'react'
export function Header() {
    const [open, setOpen] = useState(false);
    return (
        
        <div>
            {/*Navbar */}
            <div className="flex items-center justify-between bg-cyan-700/95 px-6 py-4 text-white shadow-md">
                <Link to="/" className="header-link z-10">
                    <div className="text-lg font-black tracking-[0.2em]">S.S</div>
                </Link>
            
                {/*Desktop Navigation */}
                <div className="hidden sm:flex flex-1 items-center justify-center gap-6">
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
                <a
                    href="/cv.pdf"
                    className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white/20"
                >
                    CV
                </a>
                <button className="text-xl cursor-pointer sm:hidden" onClick={() => setOpen(!open)}>
                    =
                </button>
            </div>
                {/*Mobile Navigation */}
                {open && (
                    <div className="flex flex-col gap-2 bg-cyan-700/95 p-8 text-white">
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