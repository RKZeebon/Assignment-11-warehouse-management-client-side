import Carousel from 'nuka-carousel';
import React from 'react';
import image1 from '../../Assets/Banner-imgs/1.jpg'
import image2 from '../../Assets/Banner-imgs/2.jpg'
import image3 from '../../Assets/Banner-imgs/3.jpg'
import image4 from '../../Assets/Banner-imgs/4.jpg'
import image5 from '../../Assets/Banner-imgs/5.jpg'

const Banner = () => {
    return (
        <div>

            <Carousel autoplay={true} autoplayInterval={3000} autoplayReverse={true}>
                <img className='w-full' src={image1} alt='' />
                <img className='w-full' src={image2} alt='' />
                <img className='w-full' src={image3} alt='' />
                <img className='w-full' src={image4} alt='' />
                <img className='w-full' src={image5} alt='' />
            </Carousel>
        </div >
    );
};

export default Banner;