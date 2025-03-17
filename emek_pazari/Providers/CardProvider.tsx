import { CardContextProvider } from "@/Hooks/useCard"

const CardProvider = ({children}:{children:React.ReactNode}) =>{
    
    return <CardContextProvider>{children}</CardContextProvider>
}

export default CardProvider