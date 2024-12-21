import React from 'react'
import Image from 'next/image'
interface propsType {
    title:string
    img:string
}
 
  
const Card:React.FC <propsType> =({title , img}) => {

  return (
    
      <div>
      
        
        

     <Image className = 'w-[300px] sm:w-[300px] h-[400]' 
     src={img}
     width={300}
     height={400}
     alt={title}
     />
      
        <div
        className='p-4 space-y-4'>
         <div className='text-4xl font-extralight'></div>
         </div>
      </div>

  )
}

export default Card
