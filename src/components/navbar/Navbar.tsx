"use client"
import { IconBrandFacebook, IconBrandInstagram, IconBrandSnapchat, IconBrandTiktok, IconBrandX, IconBrandYoutube, IconMapPinFilled, IconMusic, IconAt } from '@tabler/icons-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // State for dropdown menu

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto px-5">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img 
                        src="/strivetobeaz_logo_2x.png" 
                        className="h-24 sm:h-28 md:h-36" 
                        alt="Strive to Be AZ" 
                    />
                    <span className="self-center text-xl sm:text-2xl md:text-3xl font-semibold whitespace-nowrap dark:text-white">
                        Strive To Be
                    </span>
                </a>
                <button 
                    onClick={toggleMenu} 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-dropdown" 
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar-dropdown">
                    <ul className={`flex flex-col font-medium p-4 md:p-0 mt-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md: items-center md:mt-0 md:border-0 dark:bg-transparent md:dark:bg-tramsparent dark:border-gray-700`}>
                        <li>
                            <a href="/mesa" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><div className="flex justify-between"><IconMapPinFilled className="" /> Mesa</div></a>
                        </li>
                        <li>
                            <a href="/tucson" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><div className="flex justify-between"><IconMapPinFilled className="" /> Tucson</div></a>
                        </li>
                        <li>
                            <a href="/music" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><div className="flex justify-between"><IconMusic className="" /> Music</div></a>
                        </li>
                        <li className="hidden md:block relative">
                            <button 
                                onClick={toggleDropdown} 
                                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                                <div className="flex justify-between"><IconAt className="" />StriveToBeAZ</div>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute left-[-200px] bg-gray-800 rounded-lg mt-2 py-2 text-base text-gray-700 dark:text-gray-200 w-56" aria-labelledby="dropdownDefaultButton">
                                    {/* Facebook */}
                                    <li className="w-full">
                                    <a href="https://www.facebook.com/strivetobeaz" target="_blank" className="flex items-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <IconBrandFacebook className="w-7 h-7 ml-2 mr-4 text-gray-700 dark:text-gray-200" />
                                        <span>Facebook</span>
                                    </a>
                                    </li>
                                    {/* Instagram */}
                                    <li className="w-full">
                                    <a href="https://www.instagram.com/strivetobeaz" target="_blank" className="flex items-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <IconBrandInstagram className="w-7 h-7 ml-2 mr-4 text-gray-700 dark:text-gray-200" />
                                        <span>Instagram</span>
                                    </a>
                                    </li>
                                    {/* YouTube */}
                                    <li className="w-full">
                                    <a href="https://www.youtube.com/@strivetobeaz" target="_blank" className="flex items-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <IconBrandYoutube className="w-7 h-7 ml-2 mr-4 text-gray-700 dark:text-gray-200" />
                                        <span>YouTube</span>
                                    </a>
                                    </li>
                                    {/* TikTok */}
                                    <li className="w-full">
                                    <a href="https://www.tiktok.com/@strivetobeaz" target="_blank" className="flex items-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <IconBrandTiktok className="w-7 h-7 ml-2 mr-4 text-gray-700 dark:text-gray-200" />
                                        <span>TikTok</span>
                                    </a>
                                    </li>
                                    {/* X */}
                                    <li className="w-full">
                                    <a href="https://x.com/strivetobeaz" target="_blank" className="flex items-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <IconBrandX className="w-7 h-7 ml-2 mr-4 text-gray-700 dark:text-gray-200" />
                                        <span>X</span>
                                    </a>
                                    </li>
                                    {/* Snapchat */}
                                    <li className="w-full">
                                    <a href="https://www.snapchat.com/add/strivetobeaz" target="_blank" className="flex items-center w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <IconBrandSnapchat className="w-7 h-7 ml-2 mr-4 text-gray-700 dark:text-gray-200" />
                                        <span>Snapchat</span>
                                    </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                         {/* Social Media Icons for Mobile */}
                        <div className="md:hidden flex justify-center items-center w-full pb-3 space-x-4 sm:space-x-6 lg:space-x-8">
                            <a href="https://www.facebook.com/strivetobeaz" target="_blank">
                                <IconBrandFacebook className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                            </a>
                            <a href="https://www.instagram.com/strivetobeaz" target="_blank">
                                <IconBrandInstagram className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                            </a>
                            <a href="https://www.youtube.com/@strivetobeaz" target="_blank">
                                <IconBrandYoutube className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                            </a>
                            <a href="https://www.tiktok.com/@strivetobeaz" target="_blank">
                                <IconBrandTiktok className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                            </a>
                            <a href="https://x.com/strivetobeaz" target="_blank">
                                <IconBrandX className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                            </a>
                            <a href="https://www.snapchat.com/add/strivetobeaz" target="_blank">
                                <IconBrandSnapchat className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
