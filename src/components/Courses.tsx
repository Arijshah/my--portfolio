import React from 'react'
import Heading from './Heading'
import Card from './Card';

const data =[
    {
    id:0,
    title: "Certified Courses",
    img:"/course.jpeg"
}

];

const Courses = () => {
  return (
    <div id='courses' className='container pt-32'>
          <Heading title=" Certified Courses"></Heading>
          <div className='grid gap-10 xl:gap-0 xl:gap-y-8 place-content-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            img={el.img}
             />))}
            
          </div>
    </div>
    
  )
}

export default Courses
