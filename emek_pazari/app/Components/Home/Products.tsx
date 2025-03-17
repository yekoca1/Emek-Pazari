import Heading from "../general/Heading";
import {products} from "@/Utils/products";
import ProductCard from "./ProductCard";

function Products() {

    return(
        <div>
        <Heading text = "Tüm Ürünler"/>
        <div className="flex flex-row flex-wrap items-center gap-3 md:gap-10 px-3 md:px-10">
            {products.map((product) => ( <ProductCard key={product.id} product={product} /> ))}
        </div>
    </div>
    )
    
    }
  
    export default Products
