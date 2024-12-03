'use client'

import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { useIntersection } from "react-use";
import React from "react";
import { useCategoryCostFrom, useCategoryCostTo, useCategoryIngridient, useCategoryStore } from "@/store/context";


interface Props{
    className?: string;
    title:string;
    products:productsType[];
    categoryId:number;
}

interface productsType{
    name:string,
    imageUrl:string,
    categoryId:number,
    ingridients?:string,
    price:number,
  }

export const PizzaList: React.FC<Props> = ({className, title, products, categoryId}) =>{
    const intersectionRef = React.useRef(null)
    const intersection = useIntersection(intersectionRef,
        {threshold:0.4,}
    )

    React.useEffect(()=>{
        if(intersection?.isIntersecting){
            setActiveCategoryId(categoryId)
        }
    }, [title, intersection?.isIntersecting])

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const ingridientsCategories =  useCategoryIngridient((state) => state.ingridients)
    const costFrom = useCategoryCostFrom((state) => state.cost)
    const costTo = useCategoryCostTo((state) => state.cost)

    return(
        <div id={title} ref={intersectionRef} className={cn('mt-16 ml-12 flex w-[1455px] justify-between gap-[50px] flex-col', className)}>
            {((categoryId==1?products.filter(product => product.ingridients && product.ingridients.toLowerCase()?.includes(ingridientsCategories.toLowerCase())):products).filter(product => product.price && (costTo=='' || product.price<Number(costTo)) && (costFrom=='' || product.price>Number(costFrom))).length!=0) &&
            <p className="text-4xl font-bold">{title}</p>}
            <div className="flex justify-start gap-[50px] flex-wrap">
                {(categoryId==1?products.filter(product => product.ingridients && product.ingridients.toLowerCase()?.includes(ingridientsCategories.toLowerCase())):products).filter(product => product.price && (costTo=='' || product.price<Number(costTo)) && (costFrom=='' || product.price>Number(costFrom))).map(pizza => 
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
                )}
            </div>
        </div>
    )
}