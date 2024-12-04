'use client'

import React, { useState } from "react";
import { Checkbox, Input } from "../ui";
import { ingridients } from "./constants/pizzas";
import { useCategoryCostFrom, useCategoryCostTo, useCategoryIngridient } from "@/store/context";

interface Props{
    className?: string;
}

export const Filter: React.FC<Props> = ({className}) => {

    const [showAll, setShowAll] = useState<boolean>(true)
    const setIngridients = useCategoryIngridient((state) => state.setIngridients)
    const ingridientsCategories =  useCategoryIngridient((state) => state.ingridients)
    const costFrom = useCategoryCostFrom((state) => state.cost)
    const costTo = useCategoryCostTo((state) => state.cost)
    const setCostFrom = useCategoryCostFrom((state) => state.setCost)
    const setCostTo = useCategoryCostTo((state) => state.setCost)

    return(
        <div className="mt-9 ml-16 max-w-[230px]">   
            <div className="mt-6">
                <p className="text-2xl font-bold">Цена от и до:</p>
                <div className="flex gap-4 mt-4 border-b pb-6">
                    <Input className="w-[90px]" type="number" placeholder="0" min={0} max={30000} onChange={(value) => {setCostFrom(value.target.value)}}/>
                    <Input className="w-[90px]" type="number" min={100} max={30000} placeholder="30000" onChange={(value) => {setCostTo(value.target.value)}}/>
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold mt-8">Ингредиенты</p>
                <div className="mt-4">
                    {(showAll? ingridients.slice(0,6): ingridients).map((ingridient, index) => (
                        <div className="flex gap-3 items-center mb-[9px]">
                            <Checkbox onCheckedChange={(checked) => {if(!checked){setIngridients(ingridientsCategories.replace(new RegExp(ingridient.name, "g"),''))}else{setIngridients(ingridientsCategories+`${ingridient.name}`)}}}/>
                            <p key={index}>{ingridient.name}</p>
                        </div>
                    ))}
                    <p className="mt-5 text-primary cursor-pointer hover:text-orange-700" onClick={() => setShowAll(!showAll)}>+ Показать всё</p>
                </div>
            </div>
        </div>
    )
}