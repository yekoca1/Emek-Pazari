"use client"
import { createContext, useContext, useState } from "react";

interface CardContextProps{
    productCardQty: number
}
const CardContext = createContext <CardContextProps | null> (null)


interface Props{
    [productName: string] : any
}
export const CardContextProvider = (props: Props) =>{
    const[productCardQty, setProductCardQty] = useState(0) // usestate => use client

    let value = {productCardQty}
    return( <CardContext.Provider value={value} {...props}/>)
}

const useCard = () =>{
    const context = useContext(CardContext)

    if(context == null) throw new Error("Hata mevcut")
    return context

}

export default useCard