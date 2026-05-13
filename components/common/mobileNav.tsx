'use client'

import {ItemPath} from '@/type';

interface props{
    className ?: string
}

export default function MobileNav({className}:props){
 const navItem = [
        {
            item: 'Mode',
        },
        {
            item: 'Maison',
        },
        {
            item: 'Designers',
        },
    ];
    return(
        <div className={`text-white ${className}`}>
            <ul className='flex flex-col items-center'>
                {navItem.map((item,i)=>(
                    <li key={i} className='font-light text-2xl'>
                          {item.item}
                    </li>
                ))}
            </ul>

        </div>
    )
}