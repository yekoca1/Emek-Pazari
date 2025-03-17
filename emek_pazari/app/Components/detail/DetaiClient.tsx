"use client"

import PageContainer from "../Containers/PageContainer"
import Image from "next/image"
import Counter from "../general/Counter"
import { useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comments from "./Comments"
import Head from "next/head"
import Heading from "../general/Heading"
import useCard from "@/Hooks/useCard"

export type CardProductProps = {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string 
    inStock: boolean
}

const DetailClient = ({product}: {product:any}) => {

    const {productCardQty} = useCard()
    console.log("prduct amcuk",productCardQty)
 
    const[cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        image: product.image ,
        inStock: product.inStock,
    })


    function increaseFunc() {
        if(cardProduct.quantity == 10) return
        setCardProduct(prev => ({...prev, quantity: prev.quantity+1}))
    }

    function decreaseFunc() {
        if(cardProduct.quantity == 1) return
        setCardProduct(prev => ({...prev, quantity: prev.quantity-1}))
    }

    let productRating = product?.reviews?.reduce((x:number, item:any) => x+item.rating, 0) / product?.reviews?.length

    return(
        <div className="my-10"> 
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="relative h-[200px] md: h-[400] w-[200px] md: w-[400] mb-3 md: mb-0 flex 1">
                        <Image src={product?.image} fill alt="" />
                    </div>
                    <div className="w-full md:w-2/3 space-y-3">
                        <div className="text-xl md:text-2xl">{product?.name}</div>
                        <Rating name="half-rating-read" defaultValue={productRating} readOnly/>
                        <div className="text-slate-500">{product?.description}</div>
                        <div className="flex item-center gap-2">
                        <div> STOK DURUMU: </div>
                        {
                            product.inStock ? <div className="text-green-500"> Ürün Stokta Mevcut ! </div> : <div className="text-red-500"> Ürün Stokta Bulunmamaktadır ! </div>
                        } 
                    </div>
                        <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
                        <div className="text-lg md: text-xl font-bold">{product.price} $</div>
                        <Button text ="Sepete Ekle" small onClick={() => {}}/>
                    </div>
                </div>
                <Heading text = "Yorumlar"/>
                <div>
                    {product?.reviews?.map((prd:any) => (<Comments key={prd.id} prd = {prd}/>))}
                </div>
            </PageContainer>

        </div>
    )
}

export default DetailClient