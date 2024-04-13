/* eslint-disable */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import { testimonialCards } from '../constants';
import TestimonialCard from '../components/shared/TestimonialCard';

const Testimonials = () => {


  return (
    <section className=''>
      <h3 className="text-4xl text-center uppercase font-bold mb-28">
        O que nossos clientes dizem
      </h3>
     
      <Swiper  
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{
          delay:0,    
          disableOnInteraction:false,     
        }}
        loop={true}
        speed={5000}    
    >
      {
        testimonialCards.map((item,idx) =>{
          return(
            <SwiperSlide>
              <TestimonialCard 
                name={item.name} 
                comment={item.comment} 
                imgSrc={item.imgSrc} 
                key={`#${idx}`}/>
              </SwiperSlide>
            
          )
        })
      }
    </Swiper>
    

    </section>
  )
}

export default Testimonials