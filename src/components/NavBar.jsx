import { useState, useEffect } from "react"

export default function NavBar() {
    const [active, setActive] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll2 = () => {
            const triggerPoint = 64;
            setIsSticky(window.scrollY > triggerPoint);
        };

        window.addEventListener("scroll", handleScroll2);
        return () => window.removeEventListener("scroll", handleScroll2);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (

        <div className={`navbar py-3 flex items-center w-full justify-between ${isSticky ? "fixed justify-center z-100 left-0 right-auto md:bg-transparent/80 md:backdrop-blur-3xl" : ""}`}>
            {!isSticky ?
                (< div className={`logo`}>
                    <h1 className="text-3xl font-bold shadow-md transition duration-500 md:shadow-none p-1 md:bg-transparent
                md:text-white md:hover:text-cyan-300">HERYZA PORTFOLIO</h1>
                </div>) : ""}
            <ul className={`menu flex font-bold items-center md:ml-10 sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
            md:-translate-x-10 ${isSticky ? "md:-translate-x-auto sm:text-2xl md:pt-0 md:text-4xl xxl:gap-70 md:pb-3" : ""} md:opacity-100 bg-white/50 backdrop-blur-md p-4 ${!isSticky ? "md:pt-5" : ""} rounded-br-2xl rounded-bl-2xl 
            md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li><a href="#home" className="sm:text-lg text-white font-medium transition duration-500 hover:text-cyan-300">Home</a></li>
                <li><a href="#aboutme" className="sm:text-lg text-white font-medium transition duration-500 hover:text-cyan-300">About</a></li>
                <li><a href="#project" className="sm:text-lg text-white font-medium transition duration-500 hover:text-cyan-300">Projects</a></li>
                <li><a href="#contact" className="sm:text-lg text-white font-medium transition duration-500 hover:text-cyan-300">Contact</a></li>
            </ul>
        </div >

    )
};