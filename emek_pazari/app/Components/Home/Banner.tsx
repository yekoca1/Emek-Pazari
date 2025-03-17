import Image from "next/image";

function Banner() {
  return (
    <>
      <div className="h-[237px] bg-black flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image 
            src="/banner.jpg" 
            layout="fill" 
            objectFit="cover" 
            alt="Banner"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;

