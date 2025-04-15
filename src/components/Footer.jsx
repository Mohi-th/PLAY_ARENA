import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-black text-white py-6 px-4">
            <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">
                <p className="text-center lg:text-left text-sm lg:text-base font-medium">
                    Copyright © 2025. All rights reserved.
                </p>

                <ul className="flex gap-2 text-sm lg:text-base text-blue-400 justify-center items-center">
                    <li className="cursor-pointer hover:underline">Disclaimer</li>
                    <li>|</li>
                    <li className="cursor-pointer hover:underline">Privacy Policy</li>
                    <li>|</li>
                    <li className="cursor-pointer hover:underline">About Us</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
