import Image from "next/image";


const BackgroundImage = () => { 
  return (
    <div className="fixed inset-0 -z-10 ">
      <div className="absolute inset-0 -z-10 overflow-hidden ">
        <Image 
          src={'/images/photos/diablo-bg-image.jpg'}
          fill 
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-neutral-900/90 "></div>
    </div>
  )
}

export default BackgroundImage;