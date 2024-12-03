'use client'
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from '../ui/index';
import { Button } from '../ui/index';
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { useClickAway } from "react-use";
import { products } from "./constants/pizzas";

interface Props{
    className?: string;
}

export const Header: React.FC<Props> = ({className}) =>{
    const [focus, setFocus] = useState(false)
    const ref = useRef(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    useClickAway(ref, ()=>{
        setFocus(false)
    })

    const onClickItem = () => {
        setFocus(false);
        setSearchQuery('');
      };

    

    return(<>
            {focus && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>}
            <header className={cn('border border-b py-11 px-16 flex justify-between', className)}> 
                <a href="/">
                    <div className="flex items-center gap-4">
                        <Image alt="pizzalogo" src="/logo.png" width={35} height={35}/>
                        <div>
                            <p className="text-2xl uppercase font-black">NEXT PIZZA</p>
                            <p className="text-sm text-gray-400">вкусней уже некуда</p>
                        </div>
                    </div>
                </a>
                <div className="min-w-[764px] z-[100]">
                    <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="max-w-[764px] ml-[40px] bg-white" ref={ref} placeholder="Поиск пиццы..." onFocus={() => setFocus(true)} />
                        <div
                            className={cn(
                            'absolute min-w-[764px] bg-white rounded-xl py-2 top-24 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                            (focus && searchQuery!='') && 'visible opacity-100 top-[84px] ml-10',
                            )}>
                            {products.filter(product => product.name.includes(searchQuery)).map((product, index) => (
                            <a
                                onClick={onClickItem}
                                key={index}
                                className="flex items-center gap-3 min-w-[764px] px-3 py-2 hover:bg-primary/10"
                                href={`/product/${index}`}>
                                <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                                <span>{product.name}</span>
                            </a>
                            ))}
                        </div>
                </div>
                <div></div>
                <div className="flex align-center gap-4 pl-5">
                    <Button variant="outline" className="border-orange-400 text-orange-400">
                        <User />
                        <p>Профиль</p>
                        </Button>
                    <Button className="group relative">
                        <p>520 р</p>
                        <span className="h-full w-[1px] bg-white/30" />
                        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                            <ShoppingCart />
                            <p>3</p>
                        </div>
                        <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Button>
                </div>
            </header>
        </>
    )
}