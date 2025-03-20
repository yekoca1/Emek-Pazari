"use client";
import useCard from "@/Hooks/useCard";
import PageContainer from "../Containers/PageContainer";
import Image from "next/image";
import Button from "../general/Button";
import { CardProductProps } from "../detail/DetaiClient";
import Counter from "../general/Counter";

function CardClient() {

  const { cardP, removeFromCard, deleteCard, addToBasketIncrease, addToBasketDecrease } = useCard();
  //console.log("kart ürünleri", cardP);
  if (!cardP || cardP.length == 0)
    return <div>Sepette ürün bulunmamaktadır..!</div>;

  let cardPTotal = cardP.reduce((acc:any, item:CardProductProps)=> acc + item.quantity*item.price,0 )

  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center border-b py-3">
          <div className="w-1/5"> Ürün Resmi </div>
          <div className="w-1/5"> Ürün Adı </div>
          <div className="w-1/5"> Ürün Miktarı </div>
          <div className="w-1/5"> Ürün Fiyatı </div>
          <div className="w-1/5">  </div>
        </div>
        <div>
          {cardP.map((card) => (
            <div
              className="flex items-center justify-between text-center my-5"
              key={card.id}
            >
              <div className="w-1/5 flex items-center justify-center">
                {" "}
                <Image src={card.image} width={50} height={50} alt="" />{" "}
              </div>
              <div className="w-1/5">{card.name}</div>

              {/* ürün miktarı sepette de artabilecek */}
              <div className="w-1/5 flex justify-center"> 
                <Counter cardProduct={card} increaseFunc={()=>addToBasketIncrease(card)} decreaseFunc={()=>addToBasketDecrease(card)} /> 
              </div> 

              <div className="w-1/5 text-purple-500">{card.price} $</div>
              <Button small text="Ürünü Sil" onClick={() => removeFromCard(card) } />   
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between my-5 py-5 border-t">
            <button onClick={()=> deleteCard()} className="w-1/5 underline text-sm">Sepeti Sil</button>
            <div className="text-lg md:text-2xl text-purple-700">{cardPTotal}</div>
        </div>
      </PageContainer>
    </div>
  );
}
export default CardClient;

