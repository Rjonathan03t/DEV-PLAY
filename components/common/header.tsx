'use client'

import { useState } from 'react';
import { ItemPath } from "@/type";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Container from '@/components/common/container';
import Link from 'next/link';
import MobileNav from '@/components/common/mobileNav';
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
export default function Header() {
    const [mobile, setMobile] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const navItem = [
        { item: 'Accueil' },
        { item: 'Gaming' },
        { item: 'Dev' },
        { item: 'Actualités' },
    ];

    const gaming = [
        { item: 'PC GAMING' },
        { item: 'PLAYSTATION' },
        { item: 'XBOX' },
        { item: 'NITENDO' },
        { item: 'MOBILE GAMING' },
    ];

    const dev = [
        { item: 'FRONTEND' },
        { item: 'BACKEND' },
        { item: 'MOBILE' },
        { item: 'TUTORIELS' },
    ];

    const handleMenu = (menu: string) => {
        if (openMenu === menu) {
            setOpenMenu(null);
        } else {
            setOpenMenu(menu)
        }
    }
    return (

        <div className='relative'>
            <div className="flex flex-row lg:flex lg:flex-row justify-between py-5 gap-25 px-12 ">
                <Link href='/' className="flex flex-col items-center text-2xl font-mono ">
                    Dev
                    <span>&</span> <span>Play</span>
                </Link>
                <div className="flex flex-row lg:w-full justify-between items-center px-12">
                    <ul className="lg:flex lg:flex-row hidden gap-22">
                        {
                            navItem.map((item, i) => (
                                <li key={i}
                                    className="text-xl flex items-center gap-2 cursor-pointer"
                                    onClick={() => { handleMenu(item.item) }}
                                >
                                    {(item.item === 'Gaming' || item.item === 'Dev') && (
                                        openMenu === item.item
                                            ? <IoChevronUpSharp size={15} />
                                            : <IoChevronDownSharp size={15} />

                                    )}
                                    {item.item}
                                    {openMenu === item.item && item.item === 'Gaming' && (
                                        <div className="absolute top-32 left-0 bg-black w-full text-white py-4">
                                            {gaming.map((item, i) => (
                                                <li key={i}
                                                    className='text-xl cursor-pointer hover:text-black hover:bg-white pl-12'
                                                >
                                                    {item.item}
                                                </li>
                                            ))}
                                        </div>
                                    )}
                                    {openMenu === item.item && item.item === 'Dev' && (
                                        <div className="absolute top-32 left-0 bg-black w-full text-white py-4">
                                            {dev.map((item, i) => (
                                                <li key={i}
                                                    className='text-xl cursor-pointer hover:text-black hover:bg-white pl-12'
                                                >
                                                    {item.item}
                                                </li>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex flex-row items-center gap-8">
                        <p className="lg:flex hidden uppercase cursor-pointer text-xl">
                            fr
                        </p>
                        <CiSearch className='transition duration-105 hover:scale-105 cursor-pointer text-xl' />
                        <div className='lg:hidden flex cursor-pointer transition duration-105 hover:scale-105' onClick={() => setMobile(!mobile)}>
                            <RxHamburgerMenu size='25px' />
                        </div>
                    </div>
                </div>
            </div>
            {mobile && (
                <div className='absolute top-0 w-full'>
                    <div className='lg:hidden flex  relative bg-black p-12'>
                        <div className='lg:hidden absolute top-2 right-2 flex cursor-pointer transition duration-105 hover:scale-105' onClick={() => setMobile(!mobile)}>
                            <IoCloseOutline size='35px' className='text-white' />
                        </div>
                        <MobileNav className='' />
                    </div>
                </div>
            )}
        </div>

    )
}