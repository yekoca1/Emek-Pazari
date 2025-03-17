"use client"
import Image from "next/image";
import { Rating } from "@mui/material";
import textClip from "@/Utils/textClip";
import { useRouter } from "next/navigation";

function ProductCard({ product }: { product: any }) {

  const router = useRouter()
  let productRating = product?.reviews?.reduce((x:number, item:any) => x+item.rating, 0) / product?.reviews?.length

  return (
    <div onClick={()=> router.push(`product/${product.id}`)} className="w-[240px] cursor-point flex flex-col flex-1 shadow-lg p-2 rounded-md">
      <div className="relative w-full h-[150px]">
        <Image src={product.image} fill alt="" className="object-contain" />
      </div>
      <div className="text-center mt-2 space-y-1">
        <div>{textClip(product.name)}</div>
        <Rating name="half-rating-read" defaultValue={4} readOnly/>
        <div> {product.price} $</div>
      </div>
    </div> 
  );
}

export default ProductCard;
