'use client'


import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { ArrowDownUp } from "lucide-react";
import { Filter, PizzaList } from "./index";
import { coctails, cofe, combo, driknkings, pizzas, zakuski  } from "./constants/pizzas";
import { useCategoryStore } from "@/store/context";


interface Props{
    className?: string;
}

const categories = ['Завтрак', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки'];

export const Catalog: React.FC<Props> = ({className}) =>{

    const categoryACtiveId = useCategoryStore((state) => state.activeId)

    return(
        <main className={cn('h-[100vh]', className)}>
            <div className="flex justify-between items-end bg-white w-[100%] shadow-lg py-[40px] sticky top-0 z-10">
                <div className=" flex justify-between items-end w-[100%]  ">
                    <div>
                        <div className="scroll-smooth mx-16 justify-between gap-1 flex bg-gray-100 max-w-[775px] p-1.5 rounded-2xl">
                            {categories.map((categorie, index) => 
                                <a className="scroll-smooth" href={`/#${categorie}`}><Button key={index} variant="link" className={cn(`text-black hover:no-underline`, categoryACtiveId===index+1 && `bg-white`)}>{categorie}</Button></a>
                            )}
                        </div>
                    </div>
                <Button variant="link" className="mr-16 bg-gray-100 p-4 hover:no-underline"><p className="text-black flex items-center gap-2 "><ArrowDownUp />Сортировка:</p> рейтингу</Button>
                </div>
            </div>
            <div className="flex relative">
                <Filter />
                <div className="flex flex-col">
                    <PizzaList title="Завтрак" products={pizzas} categoryId={1}/>
                    <PizzaList title="Комбо" products={combo} categoryId={2}/>
                    <PizzaList title="Закуски" products={zakuski} categoryId={3}/>
                    <PizzaList title="Коктейли" products={coctails} categoryId={4}/>
                    <PizzaList title="Кофе" products={cofe} categoryId={5}/>
                    <PizzaList title="Напитки" products={driknkings} categoryId={6}/>
                </div>
            </div>
        </main>
    )
}