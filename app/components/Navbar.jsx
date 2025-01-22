import { NavLink } from "@remix-run/react";


const Navbar = () => {
    return (
        <nav className="flex flex-row justify-center space-x-6 text-xl py-4 font-semibold">
            <NavLink to='/' className={({isActive}) => isActive ? 'text-white' : 'text-purple-500'}>Home</NavLink>
            <NavLink to='/notes' className={({isActive}) => isActive ? 'text-white' : 'text-purple-500'}>Notes</NavLink>
        </nav>
    );
};

export default Navbar;

