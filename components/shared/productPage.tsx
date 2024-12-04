'use client'

import { cn } from "@/lib/utils";
import { ingridients, products } from "./constants/pizzas";
import { useState } from "react";
import { Button } from "../ui";

interface Props{
    className?: string;
    id:number
}

const testo:string[] = ["25 см, традиционное тесто 25, 380 г", "35 см, традиционное тесто 35, 810 г", "45 см, традиционное тесто 45, 1310 г"]

export const ProductPage: React.FC<Props> = ({className, id}) =>{

    const [activeTesto, setActiveTesto] = useState(0)
    const [activeTestoType, setActiveTestoType] = useState(0)

    return(
        <div className={cn('mt-11 ml-[74px]', className)}>
            <div>
                <div className="flex gap-2 text-sm">
                    <p>Главная</p>
                    <p className="opacity-50">/</p>
                    <p className="opacity-50">{products[id].name}</p>
                </div>
                <div className="mt-10 flex gap-[46px]">
                    <div className="bg-[#fff7ee] flex justify-center items-center w-[740px] h-[740px] rounded-2xl">
                        <img className="w-[500px] h-[500px]" src={products[id].imageUrl} alt="pizza"/>
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold">{products[id].name}</p>
                        <p className="text-sm opacity-50 mt-[14px]">{testo[activeTesto]}</p>
                        <div>
                            <div className="bg-gray-200 w-[420px] h-[39px] rounded-2xl flex justify-between items-center mt-[25px]">
                                <div className={`w-[138px] h-[35px] rounded-2xl p-[5px] ml-[2px] text-center hover:bg-white cursor-pointer ${activeTesto==0? `bg-white ` : ``}`} onClick={() => setActiveTesto(0)}>Маленькая</div>
                                <div className={`w-[138px] h-[35px] rounded-2xl text-center p-[5px] hover:bg-white cursor-pointer ${activeTesto==1? `bg-white ` : ``}`} onClick={() => setActiveTesto(1)}>Средняя</div>
                                <div className={`w-[138px] h-[35px] rounded-2xl text-center p-[5px] hover:bg-white cursor-pointer ${activeTesto==2? `bg-white ` : ``}`} onClick={() => setActiveTesto(2)}>Большая</div>
                            </div>
                            <div className={`bg-gray-200 w-[420px] h-[39px] rounded-2xl flex justify-between items-center mt-5`}>
                                <div className={`w-[208px] h-[35px] rounded-2xl ${activeTestoType==0? `bg-white ` : ``} p-[5px] ml-[2px] text-center`} onClick={() => setActiveTestoType(0)}>Традиционное</div>
                                <div className={`w-[208px] h-[35px] rounded-2xl ${activeTestoType==1? `bg-white ` : ``} text-center p-[5px] hover:bg-white cursor-pointer`} onClick={() => setActiveTestoType(1)}>Тонкое</div>
                            </div>
                            <p className="text-base font-semibold mt-[25px] mb-4">Ингрeдиенты</p>
                            <div className="w-[462px]">
                                <div className=" flex flex-wrap gap-[14px] h-[380px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
                                    {ingridients.map(ingridient => (
                                        <div key={ingridient.id} className="w-[130px] flex flex-col items-center shadow-lg rounded-2xl">
                                            <img width={110} height={110} src={`${ingridient.imageUrl}`} />
                                            <div className="flex flex-col justify-between  items-center text-center max-h-16 min-h-16">
                                                <p className="text-xs text-center">{ingridient.name}</p>
                                                <p className="text-sm mb-[6px]">{ingridient.price} руб</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button className="bg-orange-600 text-white mt-[63px] rounded-xl text-base"><p className="p-4">Добавить в корзину за {products[id].price}</p></Button>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="mt-[85px] text-3xl font-bold">
                <p>Рекомендации</p>
                <div className="flex gap-[65px] mt-7">
                    {products.slice(0, 5).map(pizza => (
                        <div className="max-w-[285px] min-h-[430px] flex flex-col justify-between">
                            <div>
                                <div className="bg-[#fff7ee] flex justify-center items-center w-[285px] h-[260px] rounded-2xl">
                                    <img className="w-[211px] h-[212px]" src={pizza.imageUrl} alt="pizza"/>
                                </div>
                                <p className="mb-1 mt-3 font-bold text-[22px] leading-[34px]">{pizza.name}</p>
                            </div>
                            {pizza.ingridients && <p className="text-sm text-gray-400">{pizza.ingridients[0]}{pizza.ingridients.toLowerCase().slice(1,-1)}</p>}
                            <div className="mt-3 flex justify-between">
                                <p className="text-xl font-bold">от {pizza.price}</p>
                                <Button className="bg-[#fff7eebe] text-primary text-base hover:bg-[#fff7eebe] hover:opacity-50 ">+ Добавить</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}