import './contentCss/main.css';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import one from '../../photos/images/1.jpg'
import two from '../../photos/images/2.jpg'
import three from '../../photos/images/3.jpg'
import four from '../../photos/images/4.jpg'
import five from '../../photos/images/5.jpg'
import six from '../../photos/images/6.jpg'
import seven from '../../photos/images/7.jpg'
import eight from '../../photos/images/8.jpg'
import nine from '../../photos/images/9.jpg'
import ten from '../../photos/images/10.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './contentCss/slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useState} from "react";


const Showcase = (roofs: any) => {

    const photos = [one, two, three, four, five, six, seven, eight, nine, eight]
    const [slidesCount, setSlidesCount] = useState(3);

    const checkWidth = () => {
        const width = window.innerWidth;
        if (width < 769) {
            if (width < 430) {
                setSlidesCount(1);
            } else {
                setSlidesCount(2);
            }
        } else {
            setSlidesCount(3);
        }
    }


    return (
        <div id="showcase">
            <div className="second-text">
                <h2 style={{display: "flex",
                    justifyContent: "center"}} className="provide" id="vitrine">Réalisations.</h2>
            </div>
            <div className="container-show">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={slidesCount}
                    navigation
                    loop={true}
                    onSlideChange={() => checkWidth()}
                    onSwiper={(swiper: any) => console.log(swiper)}
                >
                    {photos.map((photo: any, index: number) => (
                        <SwiperSlide>
                            <div className="swiper-slide" key={index}>
                                <div className="card-show">
                                    <img src={photo} alt="" style={{height: "300px", width: "300px"}}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Showcase;