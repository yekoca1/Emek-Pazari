    import DetailClient from "@/app/Components/detail/DetaiClient"
    import { products } from "@/Utils/products"
    import React from "react"

    type DetailProps= {
        productId? :string  //mongoDB'den string olarak gelecek

    }


    const Detail = ({params}: {params: DetailProps}) => {

        const {productId} = params

        const product = products.find(product => product.id.toString() == productId)  

        return(
            <div><DetailClient product = {product}/></div>
        )
    }

    export default Detail
