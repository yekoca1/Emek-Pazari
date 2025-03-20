"use client"
import CardClient from "@/app/Components/card/CardClient";
import { CardProductProps } from "@/app/Components/detail/DetaiClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { json } from "stream/consumers";

interface CardContextProps{
    productCardQty: number
    addToBasket : (product: CardProductProps) =>void
    removeFromCard : (product: CardProductProps) =>void
    deleteCard: () => void
    addToBasketIncrease : (product: CardProductProps) =>void
    addToBasketDecrease : (product: CardProductProps) =>void
    cardP: CardProductProps[] | null
}
const CardContext = createContext <CardContextProps | null> (null)


interface Props{
    [productName: string] : any
}
export const CardContextProvider = (props: Props) =>{
    const[productCardQty, setProductCardQty] = useState(0) // usestate => use client
    const[cardP, setCardP] = useState<CardProductProps[] |null>(null)

    useEffect(() => {
        let getItem: any = localStorage.getItem("card")
        let getItemParse:CardProductProps[] | null = JSON.parse(getItem)
        setCardP(getItemParse)
    },[])

    const addToBasket = useCallback((product: CardProductProps)=>{setCardP(prev => {
        let updatedCard
        if(prev) updatedCard = [...prev, product]
        else updatedCard = [product]

        toast.success("Ürün Sepete Eklendi")
        localStorage.setItem("card", JSON.stringify(updatedCard)) 
            // Tarayıcı içinde veri saklamak için kullanılır.
            // Kullanıcı sayfayı kapatsa bile veriler kalır.
            // Sadece string formatında veri saklar (JSON kullanarak objeye çevirmek gerekir).
        return updatedCard
    })},[cardP])

    const removeFromCard = useCallback((product: CardProductProps) => {
        if(cardP) {
            const filteredProducts = cardP.filter(card => card.id !== product.id);
            setCardP(filteredProducts);
            toast.success("Ürün Başarıyla Silindi..!");
            localStorage.setItem("card", JSON.stringify(filteredProducts));
        }
    }, [cardP]);

    const deleteCard =  useCallback(()=>{  //removeCard yerine
        setCardP(null)
        toast.success("SEPET TEMİZLENDİ..!");
        localStorage.setItem("card", JSON.stringify(null));
        console.log("boşaltıldı")
    },[])
    
    const addToBasketIncrease = useCallback((product: CardProductProps)=>{
        let updatedCard
        if(product.quantity == 10) return toast.error("yeter amk evladı")
        if(cardP)
        {
            updatedCard = [...cardP]
            const existingItem = cardP.findIndex(item => item.id === product.id)
            if(existingItem>-1)
            {
                updatedCard[existingItem].quantity = ++updatedCard[existingItem].quantity
            }
            setCardP(updatedCard)
            localStorage.setItem("card", JSON.stringify(updatedCard))
        }
    }, [cardP])

    const addToBasketDecrease = useCallback((product: CardProductProps)=>{
        let updatedCard
        if(product.quantity == 1) return toast.error ("Bir tane kaldı zaten")
        if(cardP)
        {
            updatedCard = [...cardP]
            const existingItem = cardP.findIndex(item => item.id === product.id)
            if(existingItem>-1)
            {
                updatedCard[existingItem].quantity = --updatedCard[existingItem].quantity
            }
            setCardP(updatedCard)
            localStorage.setItem("card", JSON.stringify(updatedCard))
        }
    }, [cardP])

    let value = { //dışarıda kullanabilmek için gerekli ama NEDEN
        productCardQty,
        addToBasket,
        removeFromCard,
        deleteCard,
        addToBasketIncrease,
        addToBasketDecrease,
        cardP
    }
    return( <CardContext.Provider value={value} {...props}/>)
}

const useCard = () =>{
    const context = useContext(CardContext)

    if(context == null) throw new Error("Hata mevcut")
    return context

}

export default useCard

