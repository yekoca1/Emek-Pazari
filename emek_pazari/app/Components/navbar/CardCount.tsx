"use client"
import useCard from "@/Hooks/useCard";
import { SlBasket } from "react-icons/sl";


function CardCount() {
    const {cardP} = useCard()

    return(
      <div className="hidden md:flex relative">
      <SlBasket size={30}/>
      <div className="absolute -top-2 -right-2 bg-purple-900 w-5 h-5 flex items-center justify-center rounded-full"> {cardP?.length} </div>
    </div>
    )
    
  }

  export default CardCount



//ŞİMDİLİK KALSIN ADAM NASIL YÖNLENDİRME YAPTI ANLAMADIM AMK BELKİ USECARD'DA OLABİLİR
//   "use client";
// import useCard from "@/Hooks/useCard";
// import { SlBasket } from "react-icons/sl";
// import { useRouter } from "next/navigation"; // Next.js yönlendirme hook'u

// function CardCount() {
//     const { cardP } = useCard();
//     const router = useRouter(); // useRouter hook'unu tanımla

//     return (
//         <div 
//             className="hidden md:flex relative cursor-pointer" 
//             onClick={() => router.push("/card")} // Tıklandığında /card sayfasına yönlendir
//         >
//             <SlBasket size={30} />
//             <div className="absolute -top-2 -right-2 bg-purple-900 w-5 h-5 flex items-center justify-center rounded-full">
//                 {cardP?.length}
//             </div>
//         </div>
//     );
// }

// export default CardCount;
