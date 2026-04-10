'use client'

import { useState } from 'react';
import { ItemPath } from "@/type";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from '@/components/common/container';
import Link from 'next/link';
export default function Header() {
    const [mobile, setMobile] = useState<boolean>(false);
    const navItem: ItemPath[] = [
        {
            item: 'Mode',
            path: ''
        },
        {
            item: 'Maison',
            path: ''
        },
        {
            item: 'Designers',
            path: ''
        },
    ];
    return (
        <Container Children={
            <div className="flex flex-row lg:flex lg:flex-row justify-between py-5 gap-12 px-5">
                <Link href='/' className="flex flex-col items-center text-3xl font-mono ">
                    Dev 
                    <span>&</span> <span>Play</span>
                </Link>
                <div className="flex flex-row lg:w-full justify-between items-center px-5">
                    <ul className="lg:flex lg:flex-row hidden gap-12">
                        {
                            navItem.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.path} className="text-xl font-light">
                                        {item.item}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex flex-row items-center gap-3">
                        <p className="lg:flex hidden uppercase font-light cursor-pointer">
                            en
                        </p>
                        <Link href={''} className="uppercase ">
                            panier
                        </Link>
                        <CiSearch className='transition duration-105 hover:scale-105 cursor-pointer'/>
                        <div className='lg:hidden flex cursor-pointer transition duration-105 hover:scale-105'>
                            <RxHamburgerMenu size='25px' />
                        </div>
                    </div>
                </div>
            </div>
        } />
    )
}