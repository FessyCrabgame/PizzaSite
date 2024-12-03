import { create } from "zustand";

interface State{
    activeId:number;
    setActiveId:(activeId:number) => void;
}

export const useCategoryStore = create<State>()((set) => ({
    activeId:1,
    setActiveId:(activeId:number) => set({activeId}),
}));

interface ingridientFilter{
    ingridients:string;
    setIngridients:(ingridients:string) => void;
}
export const useCategoryIngridient = create<ingridientFilter>()((set) => ({
    ingridients:"",
    setIngridients:(ingridients:string) => set({ingridients}),
}));

interface Cost{
    cost:string;
    setCost:(activeId:string) => void;
}

export const useCategoryCostFrom = create<Cost>()((set) => ({
    cost:'',
    setCost:(cost:string) => set({cost}),
}));


export const useCategoryCostTo = create<Cost>()((set) => ({
    cost:'',
    setCost:(cost:string) => set({cost}),
}));
