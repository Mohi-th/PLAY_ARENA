import React, { useState } from 'react'
import { navItems } from '../config'
import { ChevronDown } from 'lucide-react'
import PlayComponent from './NavbarPlayComponent'
import NavbarDropDowns from './NavbarDropDowns'

function MobileMenu({openMenu}) {

    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <nav className={`${openMenu?"block":"hidden"} overflow-scroll`}>
            <ul className=' text-white bg-black flex flex-col items-start justify-start font-semibold  text-[18px] h-screen'>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="relative flex flex-col h-fit w-full items-center "
                        onClick={() => setOpenDropdown(index)}
                    >
                        <div className="flex items-center justify-between gap-1 w-full p-2 relative group px-[15px]">
                            {item.title}
                            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                            <span className="absolute left-0 bottom-0 mt-5 h-0.5 w-0 bg-[#007bfe] transition-all duration-300 group-hover:w-full"></span>
                        </div>

                        <section className={`w-full ${openDropdown===index?"block":"hidden"} `}>
                            {item.dropdown && (
                            index === 0
                                ? <PlayComponent isOpen={openDropdown === index} />
                                : <NavbarDropDowns menuItems={item.menu} isOpen={openDropdown === index} />
                        )} 
                        </section>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MobileMenu
