import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div
      id = "hero" className= 'min-h-screen bg-no-repeat bg-[url(/banner.jpg)] '
      style={{backgroundSize: "16%", backgroundPosition:"left 100px top 50px " }}
      >
  <Navbar /> <div className='container:grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>

         <div className='container pt-48'>

         
          <div className='grid md:grid-cols-1 gap-20 items-center'>

        

          <div ><h2 className='text-5xl md:text-5xl'>:Realization of IT Importance
               </h2>
               <p className='text-black-400 pt-4'>
                Computer courses teach students the fundamental concepts of computers. It can help them develop the skills needed to pursue a variety of careers: 
               </p>
     
                       <div>
                         <h3 className='text-5xl md:text-5xl'> :Career Paths  </h3>
             
                          <p className='text-black-400 pt-4'>
                         
                          Computer courses can prepare students for careers in many fields. 
                         Such as software development, web development, data science, artificial intelligence, machine learning, cyber security, and more.
                    </p> 
                    </div>
                   </div>
            
           
          
            </div>
            </div>
            
            </div>
              </div>
    
  

  )
}

export default Hero

