import React, { useState } from 'react';
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import PlayComponent from './NavbarPlayComponent';
import { navItems } from '../config';
import NavbarDropDowns from './NavbarDropDowns';
import MobileMenu from './MobileMenu';

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openMenu,setOpenMenu]=useState(false);

    return (
        <>
        <nav className='bg-black flex lg:justify-around px-5  justify-between items-center lg:h-[80px] h-[61px] relative'>
            <figure className='lg:h-[50px] flex h-[40px] justify-center items-center gap-4'>
                <Menu onClick={()=>{setOpenMenu(true)}} className={`text-white h-11 w-11 ${!openMenu?"block":"hidden"}  lg:hidden `}/>
                <X onClick={()=>{setOpenMenu(false)}} className={`text-white h-11 w-11 ${openMenu?"block":"hidden"}  lg:hidden `}/>
                <img className='w-full h-full' src="https://playarena.in/wp-content/themes/playarena.in/img/logo.svg" alt="Play arena" />
            </figure>
            <ul className='lg:hidden flex gap-5'>
                <li>
                    <Phone className='text-white' />
                </li>
                <li>
                    <figure><img src="https://playarena.in/wp-content/themes/playarena.in/img/icon-whatsapp-1.svg" alt="" /></figure>
                </li>
                <li>
                    <MapPin className='text-white' />
                </li>
            </ul>
            <ul className='text-white hidden items-center justify-center font-semibold lg:flex  text-[18px] h-full'>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="relative h-full flex justify-center items-center px-[15px]"
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <div className="flex items-center gap-1 h-full relative group">
                            {item.title}
                            {item.dropdown && (
                                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                            )}
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-[#007bfe] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        {item.dropdown && (
                            index === 0
                                ? <PlayComponent isOpen={openDropdown === index} />
                                : <NavbarDropDowns menuItems={item.menu} isOpen={openDropdown === index} />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
        <MobileMenu openMenu={openMenu} />
        </>

    );
}

export default Navbar;
