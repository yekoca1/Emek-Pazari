import Image from "next/image";
import Category from "./Components/Home/Category";
import Banner from "./Components/Home/Banner";
import Products from "./Components/Home/Products";

export default function Home() {
  return (
    <div>
      <Category />
      <Banner />
      <Products />
    </div>
  );
}
