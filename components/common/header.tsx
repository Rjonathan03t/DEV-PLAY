'use client'

import { ItemPath } from "@/type";
import { CiSearch } from "react-icons/ci";
import Container from '@/components/common/container';
export default function Header() {
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
    ]
    return (
        <Container Children={
            <div className="bg-red-500">
                <h1>
                    Dev & Play
                </h1>
                {
                    navItem.map((item, i) => (
                        <div key={i}>
                            <p>
                                {item.item}
                            </p>
                        </div>
                    ))
                }
                <div>
                    <p>
                        en
                    </p>
                    <p>
                        Cart
                    </p>
                    <CiSearch />
                </div>
            </div>
        } />
    )
}