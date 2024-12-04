'use client'

import { products } from "@/components/shared/constants/pizzas"
import { ProductPage} from '../../../components/shared'

export default function ProdactUrl({params: {id}}: {params:{id:string}}){
    return(
        <div>
            <ProductPage id={Number(id)}/>
        </div>
    )
}