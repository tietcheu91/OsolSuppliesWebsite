// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import './HomeSlider.css';

// import slide_image_1 from '../../images/homePageCamfoot.JPG';
// import slide_image_2 from '../../images/homePageCamfoot.JPG';
// import slide_image_3 from '../../images/homePageCamfoot.JPG';
// import slide_image_4 from '../../images/homePageCamfoot.JPG';
// import slide_image_5 from '../../images/homePageCamfoot.JPG';
// import slide_image_6 from '../../images/homePageCamfoot.JPG';
// import slide_image_7 from '../../images/homePageCamfoot.JPG';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// function HomeSlider() {
//   return (
//     <div className="container">
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default HomeSlider;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import slide_image_1 from '../../images/card.JPG';
import slide_image_2 from '../../images/main.JPG';
import slide_image_3 from '../../images/mainblue.JPG';
import slide_image_4 from '../../images/mainStanding.JPG';
import slide_image_5 from '../../images/mirror.JPG';
import slide_image_6 from '../../images/mirror4.JPG';
import slide_image_7 from '../../images/mainPens.JPG';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './HomeSlider.css';

// import required modules
import { Pagination, Scrollbar, A11y  } from 'swiper/modules';

// effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}

export default function HomeSlider() {
  return (
    <div >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'auto'}
        loop={true}
        spaceBetween={5}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3}  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7}  />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div >
  );
}
