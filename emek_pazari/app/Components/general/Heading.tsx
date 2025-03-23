interface HeadingProps{
    center?: boolean  //ortalaması
    text: string
}

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
    return(
        <div className={`font-bold text-slate-500 my-3 md:my-5 px-3 md: px-10 py-3 md: py-10 md: text-xl ${center ? "text-center" : "text-start"}`}>{text}</div>
    )
  }
  
  
    export default Heading




    