import SwiperCore from 'swiper';
import { A11y, Navigation, Pagination} from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';


import Image1 from '../../assets/image 2.svg'
import Image2 from '../../assets/image 3.svg'
import Image3 from '../../assets/image 4.svg'

import MouseImage from '../../assets/slider/slider.svg'
import signupimage from '../../assets/black-afro.png'
import Client1 from '../../assets/slider/1.svg'
import Client2 from '../../assets/slider/2.svg'
import Client3 from '../../assets/slider/3.svg'
import Client4 from '../../assets/slider/4.svg'
import Client5 from '../../assets/slider/5.svg'
import Client6 from '../../assets/slider/6.svg'

import WhatWeDo1 from '../../assets/section-three/section-3-a.svg'
import WhatWeDo2 from '../../assets/section-three/section-3-b.svg'
import WhatWeDo3 from '../../assets/section-three/section-3-c.svg'


import ServiceIcon1 from '../../assets/service/service-3.svg'
import ServiceIcon3 from '../../assets/service/service-2.svg'
import ServiceIcon4 from '../../assets/service/service-1.svg'
import ServiceIcon2 from '../../assets/service/service-5.svg'
import ServiceIcon2Arrow from '../../assets/service/arrow-service.svg'
import Pyramid from '../../assets/str-desktop.svg'
import {ReactComponent as PyramidMobile} from '../../assets/pyramid_2.svg'
import vector from '../../assets/Vector(2).svg'
import {Container} from "./components/Container";

SwiperCore.use([A11y, Navigation, Pagination]);

const sliderOptions = {
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: '32',
    navigation: {
        prevEl: '.service-slider-prev',
        nextEl: '.service-slider-next',
    },
    breakpoints: {
        360: {
            slidesPerView: '1.2',
        },
        812: {
            slidesPerView: '2.2',
        },
        1020: {
            slidesPerView: '3.3',
        }
    }
};

export const HomepageHero = (props) => {
    return (
        <Container>
            <section className='flex flex-col md:flex-row md:items-start md:justify-between w-full'>
                <div className="w-full md:w-1/2">
                    <span className='text-center text-sm md:text-base font-Inter text-[#100650] font-medium h-[36px] bg-[#4A00FF0F]/5 rounded-[6px] py-2'>
                   {props.tagText}
                </span>
                    <div className='flex flex-col mt-4'>
                        <h1 className="font-black font-Satoshi text-[3.5rem] md:text-[56px] leading-[63px]">
                            {props.heroHeading}
                        </h1>
                        <p className="leading-[35px] text-[1.125rem] md:text-lg font-Inter mt-6">
                            {props.homepageParagraph}
                        </p>
                    </div>
                    <div>
                        <a className="mt-5 text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2">
                            Book a FREE Strategy Session
                        </a>
                        <div className='flex mt-[1.88rem] space-x-1 md:mt-14 md:space-x-6 flex-row items-center'>
                            <img  className="w-1/3 md:w-full" src={Image1} />
                            <img className="w-1/3 md:w-full" src={Image2} />
                            <img className="w-1/3 md:w-full" src={Image3} />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-[3.1rem] md:mt-0 flex flex-row md:justify-center">
                    <img className="self-end" src={props.imageSrc} alt={props?.imageAlt ?? 'Emerge digital'}  />
                </div>
            </section>
        </Container>
    )
}


export const Clients = () => {
    return (
        <section className="flex flex-col mt-28">
            <div className="hidden md:flex flex-row justify-center">
                <img src={MouseImage} className="" alt="Mouse" />
            </div>
            <div className='flex mt-10 mb-5 flex-row items-center justify-center'>
                <h3 className="text-2xl font-Inter font-medium">Our happy clients</h3>
            </div>
            <div className="marquee-container">
                <div className="flex flex-row marquee-content">
                    <img src={Client1} alt="Client1" />
                    <img src={Client2} alt="Client2" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client4} alt="Client4" />
                    <img src={Client5} alt="Client5" />
                    <img src={Client6} alt="Client6" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client2} alt="Client2" />
                    <img src={Client1} alt="Client1" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client4} alt="Client4" />
                    <img src={Client5} alt="Client5" />
                    <img src={Client6} alt="Client6" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client1} alt="Client1" />
                    <img src={Client2} alt="Client2" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client4} alt="Client4" />
                    <img src={Client5} alt="Client5" />
                    <img src={Client6} alt="Client6" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client2} alt="Client2" />
                    <img src={Client1} alt="Client1" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client4} alt="Client4" />
                    <img src={Client5} alt="Client5" />
                    <img src={Client6} alt="Client6" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client1} alt="Client1" />
                    <img src={Client2} alt="Client2" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client4} alt="Client4" />
                    <img src={Client5} alt="Client5" />
                    <img src={Client6} alt="Client6" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client2} alt="Client2" />
                    <img src={Client1} alt="Client1" />
                    <img src={Client3} alt="Client3" />
                    <img src={Client4} alt="Client4" />
                    <img src={Client5} alt="Client5" />
                    <img src={Client6} alt="Client6" />
                    <img src={Client3} alt="Client3" />
                </div>
            </div>
        </section>
    );
};

export const WhatWeDo = () => {
    return (
        <div className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden bg-gradient-to-b from-transparent to-purple-100">
            <section className="mt-24 pb-24">
                <div className="flex flex-col items-center">
                    <div>
                        <span className='h-[36px] text-center font-Inter text-[#100650] font-medium bg-opacity-5 bg-[#4A00FF0F] rounded-[6px] px-[0.62rem] py-2'>
                     OUR STRENGTHS
                    </span>
                    </div>
                    <h1 className="text-center mt-4 font-black font-Satoshi text-[42px]">What Makes Us Different</h1>
                </div>
                <div className=" mt-[5.19rem] md:mt-14 flex flex-col md:flex-row space-y-[1.81rem] md:space-y-0 md:space-x-16 md:items-center md:justify-between">
                    <div className="flex flex-col w-full  md:w-1/3">
                        <img className="w-[310px] h-[190px]" src={WhatWeDo1} />
                        <h3 className="font-black text-2xl font-Satoshi text-center my-6">Turn curiosity into sales</h3>
                        <p className="text-lg text-center font-Inter font-normal">Craft a unique marketing campaign that ‘gels’ with your ideal customer and turns their curiosity into bona-fide sales.</p>
                    </div>
                    <div className="flex flex-col w-full  md:w-1/3">
                        <img className="w-[310px] h-[190px]" src={WhatWeDo2} />
                        <h3 className="font-black text-2xl font-Satoshi text-center my-6">Driven by data</h3>
                        <p className="text-lg text-center font-Inter font-normal">
                            Takeout guesswork. Make informed choices about your digital marketing strategy with privacy-centric first-party data solutions.
                        </p>
                    </div>
                    <div className="flex flex-col w-full  md:w-1/3">
                        <img className="w-[310px] h-[190px]" src={WhatWeDo3} />
                        <h3 className="font-black text-2xl font-Satoshi text-center my-6">Trusted support network</h3>
                        <p className="text-lg text-center font-Inter font-normal">
                            You are guided every step of the way. Our focus on maintaining a friendly rapport and keeping things transparent means you can relax knowing you are in good hands.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}


export const CallToActionSection = () => {
    return (
        <section className="bg-[#100650] -px-[8rem]">
            <div className="flex px-[2.06rem] md:px-32 pt-[3.5rem]  pb-[20rem]  md:py-40 flex-col md:flex-row bg-section-4-mobile md:bg-section-4 bg-origin-border bg-no-repeat bg-right-bottom md:bg-right-top" >
                <div className="w-full md:w-2/3">
                    <span className='text-sm md:text-base text-center font-Inter text-[#100650] text-white font-medium uppercase h-[36px] bg-white/10 px-2.5 rounded-[6px] py-2'>
                        PERSONALISED. RELIABLE. EFFECTIVE
                    </span>
                    <h3 className="leading-[3.9rem] mt-[1.19rem] font-black font-Satoshi text-[3.2rem] md:text-[3.5rem] text-white">
                        Enjoy Full-Service Digital Marketing Expertise
                    </h3>
                    <p className="font-Inter mt-7 mb-11 text-white  leading-[1.6rem] text-lg font-normal">
                        Digital media strives to transparently reach people—not personas—through tech.
                        <br />
                        We are willing to decipher the crux of your organization and understand all the moving pieces in combination of hard-working communication, extensive design, and technology smarts to unlock your growth potential.
                        <br />
                        We enhance our partner’s delivery of customer experience to their customers by delivering personalized messaging activating the right message at the right time to the right touchpoint.  <br />
                    </p>
                    <a className="mt-5 text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2">
                        Book a FREE Strategy Session
                    </a>
                </div>
            </div>
        </section>
    )
}


export const OurServices = () => {
        return (
            <div className="w-full pl-[1.25rem] lg:pl-[8rem] overflow-hidden">
                <section className="mt-24">
                <span className='text-center font-Inter text-[#100650] font-medium uppercase h-[36px] bg-[#4A00FF0F]/5 px-2.5 rounded-[6px] py-2'>
                        Our services
                    </span>
                    <h3 className="mt-4 font-black font-Satoshi pr-[0.5rem] text-[2.875rem] md:text-5xl w-full  md:w-1/2 leading-[3.3rem] ">
                        Powerful Digital Marketing Solutions
                    </h3>
                    <div className="mt-11 md:mb-52 mb-[5.56rem]">
                        <Swiper {...sliderOptions} className="w-full flex">
                            <SwiperSlide className="pt-8 px-6 flex bg-[#F7F5FC] flex-col rounded-[20px]">
                                <div className="h-[33rem] md:h-[29rem]">

                                    <img className="w-[50px] h-[50px]" src={ServiceIcon1} />
                                    <h3 className="font-black text-[#0E1218] mt-[2.43rem] mb-[0.93rem] w-2/3 text-2xl font-Satoshi leading-[30px]">
                                        Digital Analytics & Measurement
                                    </h3>
                                    <p className="font-Inter font-normal text-lg leading-[30px]">
                                        No matter how well your SEO, social media, or paid media ad campaigns are planned, consistent growth is only possible if you receive accurate reports on every metric related to your strategies.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="pt-8 px-6 flex bg-[#100650] flex-col rounded-[20px]">
                                <div className="h-[33rem] md:h-[29rem]">
                                    <div>
                                        <img className="w-[50px] h-[50px]" src={ServiceIcon2} />
                                    </div>
                                    <h3 className="font-black text-white mt-[2.43rem] mb-[0.93rem] w-2/3 text-2xl font-Satoshi leading-[30px]">
                                        Paid Media Services
                                    </h3>
                                    <p className="font-Inter font-normal text-white text-lg leading-[30px]">
                                        A paid placement in an external marketing campaign is referred to as a paid media. PPC marketing, display ads, and branded content are all part of it. For online businesses, this is a crucial element of revenue growth and brand awareness.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="pt-8 px-6 flex bg-[#F7F5FC] flex-col rounded-[20px]">
                                <div className="h-[33rem] md:h-[29rem]">
                                    <img className="w-[50px] h-[50px]" src={ServiceIcon3} />
                                    <h3 className="font-black w-2/3  mt-[2.43rem] mb-[0.93rem] text-[#0E1218] text-2xl font-Satoshi leading-[30px]">
                                        Search Engine Optimization (SEO)
                                    </h3>
                                    <p className="font-Inter font-normal text-lg leading-[30px]">
                                        Our mission is to assist local businesses as well as businesses targeting the Dubai market increasing their online visibility, ranking, and traffic through search engine optimization.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="pt-8 px-6 flex bg-[#F7F5FC] flex-col rounded-[20px]">
                                <div className="h-[33rem] md:h-[29rem]">
                                    <img className="w-[50px] h-[50px]" src={ServiceIcon4} />
                                    <h3 className="font-black w-2/3 mt-[2.43rem] mb-[0.93rem] text-[#0E1218] text-2xl font-Satoshi leading-[30px]">
                                        Digital Analytics & Measurement
                                    </h3>
                                    <p className="font-Inter font-normal text-lg leading-[30px]">
                                        No matter how well your SEO, social media, or paid media ad campaigns are planned, consistent growth is only possible if you receive accurate reports on every metric related to your strategies.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="flex flex-row items-center w-full justify-end md:px-16">
                            <div className="flex mt-12 flex-row space-x-5 items-center">
                                <button className="service-slider-prev">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23" cy="23" r="22.6034" transform="matrix(-1 0 0 1 46 0)" stroke="black" stroke-width="0.793103"/>
                                        <g clip-path="url(#clip0_4301_4478)">
                                            <path d="M31.7266 23H14.2783" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M21.4141 30.1406L14.2761 23.0027L21.4141 15.8648" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4301_4478">
                                                <rect width="25.3793" height="25.3793" fill="white" transform="matrix(0 -1 -1 0 35.6914 35.6914)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button className="service-slider-next">
                                    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23.5508" cy="23" r="22.6034" stroke="black" stroke-width="0.793103"/>
                                        <g clip-path="url(#clip0_4301_4484)">
                                            <path d="M14.8242 23H32.2725" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M25.1328 30.1406L32.2707 23.0027L25.1328 15.8648" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4301_4484">
                                                <rect width="25.3793" height="25.3793" fill="white" transform="matrix(0 -1 1 0 10.8594 35.6914)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
}


export const Partnership = () => {
    return (
       <Container>
           <section className="flex flex-col md:flex-row items-start">
               <div className="mb-[3.44rem] md:mb-0 flex-1">
                <span className='inline-flex text-sm md:text-base text-center font-Inter text-[#100650] font-medium uppercase h-[36px] bg-[#4A00FF0F]/5 px-2.5 rounded-[6px] py-2'>
                        UNDERSTAND YOUR CUSTOMERS BETTER
                    </span>
                   <h3 className="font-black font-Satoshi leading-[3.24rem] md:leading-[3.94rem] text-[2.875rem] md:text-[3.125rem] mt-[1.56rem] md:mt-8">
                       Work with us to IGNITE the power of your first-party Data
                   </h3>
                   <div className="flex flex-col mt-5">
                       <p className="text-black font-Inter text-lg leading-[35px]">
                           BCG identified six technological and organizational enablers that empower brands to pull insights from their own data.
                       </p>
                       <p className="mt-5 text-black font-Inter text-lg leading-[35px]">
                           Emerge Digital will augment your team to fulfil the enablers and roles necessary for your Digital Transformation projects
                       </p>
                   </div>
               </div>
               <div className="flex-1">
                   <div className="block md:hidden">
                    <PyramidMobile className="w-[20.79125rem] h-[18.6rem] block md:hidden" />
                    </div>
                   <div className="hidden md:block">
                       <img src={Pyramid} alt="" />
                   </div>
               </div>
           </section>
       </Container>
    )
}

export const Steps = () => {
    return (
       <Container>
           <section className="my-16">
               <div className="grid grid-cols-2 items-center md:grid-cols-3 md:gap-y-28 gap-x-[4.93rem]">
                   <div className="flex flex-col">
                       <svg width="97" height="70" viewBox="0 0 97 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M32.5 0.373815C32.5 0.16736 32.6674 0 32.8738 0C68.0136 0 96.5 28.4864 96.5 63.6262V69.5911C96.5 69.8169 96.3169 70 96.0911 70H64.5C46.8269 70 32.5 55.6731 32.5 38V0.373815Z" fill="#E7D3FF"/>
                           <path d="M5.9 70.0002V57.9002H24.7V11.1002H23.8L9.6 29.7002L0 22.2002L16.7 0.200195H39.7V57.9002H54.5V70.0002H5.9Z" fill="black"/>
                       </svg>
                       <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">Strategic Parnerships</h3>
                   </div>
                   <div  className="flex flex-col">
                       <svg width="75" height="71" viewBox="0 0 75 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M74.7986 38C74.7986 58.4345 58.2331 71 37.7985 71C-9.70141 63.5 37.7987 41.9345 37.7987 21.5C37.7987 1.06546 17.3641 1 37.7986 1C58.2332 1 74.7986 17.5655 74.7986 38Z" fill="#E7D3FF"/>
                           <path d="M50.9 71H1.5V57.3L23 38.9C24.9333 37.2333 26.5667 35.7333 27.9 34.4C29.2333 33 30.3 31.6667 31.1 30.4C31.9667 29.0667 32.5667 27.7667 32.9 26.5C33.3 25.2333 33.5 23.8667 33.5 22.4V21C33.5 19.6667 33.2333 18.5 32.7 17.5C32.1667 16.5 31.4667 15.6667 30.6 15C29.7333 14.3333 28.7333 13.8333 27.6 13.5C26.5333 13.1667 25.4333 13 24.3 13C22.6333 13 21.1667 13.2667 19.9 13.8C18.7 14.3333 17.6333 15.0667 16.7 16C15.8333 16.8667 15.1 17.9 14.5 19.1C13.9 20.2333 13.4333 21.4667 13.1 22.8L0 17.8C0.8 15.4 1.9 13.1333 3.3 11C4.7 8.8 6.43333 6.9 8.5 5.3C10.6333 3.63333 13.1333 2.33333 16 1.4C18.8667 0.466666 22.1 0 25.7 0C29.5 0 32.8667 0.533333 35.8 1.6C38.7333 2.66667 41.2 4.13333 43.2 6C45.2667 7.86667 46.8333 10.1 47.9 12.7C48.9667 15.2333 49.5 18 49.5 21C49.5 24 49 26.7333 48 29.2C47 31.6667 45.6333 34 43.9 36.2C42.2333 38.3333 40.2667 40.3667 38 42.3C35.7333 44.2333 33.3667 46.2 30.9 48.2L17.9 58.4H50.9V71Z" fill="black"/>
                       </svg>
                       <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">Specialist Skills</h3>
                   </div>
                   <div  className="flex flex-col">
                       <svg width="87" height="74" viewBox="0 0 87 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M35.7362 8.57669C30.7262 7.37429 31.5987 0 36.751 0H77.7953C82.8789 0 87 4.1211 87 9.20474V63.2746C87 68.9219 82.4219 73.5 76.7746 73.5H30.2098C25.5121 73.5 24.6228 66.8226 29.1567 65.5931C29.3851 65.5312 29.6076 65.4492 29.8217 65.3481L35.2772 62.7719C41.9828 59.6054 44.7713 51.5427 41.455 44.9099L40.7604 43.5208C38.7873 39.5746 39.3888 34.8279 42.2839 31.4986C45.3917 27.9246 45.8347 22.7522 43.3799 18.7018L38.4401 10.5512C37.8385 9.55853 36.8649 8.84758 35.7362 8.57669Z" fill="#E7D3FF"/>
                           <path d="M29.2016 29.8C32.9349 29.8 35.6349 29.1 37.3016 27.7C39.0349 26.2333 39.9016 24.4333 39.9016 22.3V21.6C39.9016 19.0667 39.0682 17.0333 37.4016 15.5C35.8016 13.9667 33.5016 13.2 30.5016 13.2C27.7016 13.2 25.0682 13.9333 22.6016 15.4C20.1349 16.8 18.0349 18.8333 16.3016 21.5L6.90156 12.7C8.2349 10.9667 9.66823 9.4 11.2016 8C12.7349 6.53333 14.4682 5.3 16.4016 4.3C18.3349 3.23333 20.5016 2.43333 22.9016 1.9C25.3016 1.3 28.0016 1 31.0016 1C34.7349 1 38.1016 1.43333 41.1016 2.3C44.1682 3.16667 46.7682 4.43334 48.9016 6.1C51.1016 7.7 52.7682 9.63333 53.9016 11.9C55.1016 14.1667 55.7016 16.7 55.7016 19.5C55.7016 21.7 55.3349 23.7 54.6016 25.5C53.9349 27.3 52.9682 28.8667 51.7016 30.2C50.5016 31.5333 49.1016 32.6333 47.5016 33.5C45.9016 34.3 44.2016 34.8667 42.4016 35.2V35.8C44.4682 36.2 46.3682 36.8667 48.1016 37.8C49.9016 38.6667 51.4349 39.8 52.7016 41.2C54.0349 42.6 55.0682 44.2667 55.8016 46.2C56.5349 48.0667 56.9016 50.2 56.9016 52.6C56.9016 55.7333 56.2682 58.5667 55.0016 61.1C53.7349 63.6333 51.9349 65.8 49.6016 67.6C47.2682 69.4 44.4682 70.8 41.2016 71.8C37.9349 72.7333 34.3349 73.2 30.4016 73.2C26.8682 73.2 23.7349 72.8333 21.0016 72.1C18.2682 71.3667 15.8682 70.4 13.8016 69.2C11.8016 67.9333 10.0349 66.5 8.50156 64.9C7.0349 63.3 5.7349 61.6 4.60156 59.8L15.7016 51.2C17.2349 54.0667 19.1016 56.4333 21.3016 58.3C23.5682 60.1 26.6016 61 30.4016 61C33.8016 61 36.4349 60.1667 38.3016 58.5C40.2349 56.7667 41.2016 54.4333 41.2016 51.5V50.9C41.2016 48.0333 40.1016 45.9 37.9016 44.5C35.7682 43.0333 32.8016 42.3 29.0016 42.3H22.7016V29.8H29.2016Z" fill="black"/>
                       </svg>

                       <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">Agile Teaming & Fail Fast Culture</h3>
                   </div>
                   {/**/}
                   <div className="flex flex-col">
                       <svg width="102" height="108" viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M37.5 22.3455C37.5 22.139 37.6674 21.9717 37.8738 21.9717C73.0136 21.9717 101.5 50.4581 101.5 85.5979V91.5628C101.5 91.7886 101.317 91.9717 101.091 91.9717H69.5C51.8269 91.9717 37.5 77.6448 37.5 59.9717V22.3455Z" fill="#E7D3FF"/>
                           <path d="M32.77 90V77.0467H2.41667V64.6733L29.29 22.5267H46.69V65.8333H55.39V77.0467H46.69V90H32.77ZM14.1133 65.8333H32.77V37.51H31.9L14.1133 65.8333Z" fill="black"/>
                       </svg>
                       <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">Automation & Integrated Tech</h3>
                   </div>
                   <div  className="flex flex-col">
                       <svg width="91" height="115" viewBox="0 0 91 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M90.7988 60.6943C90.7988 81.1289 74.2332 93.6943 53.7987 93.6943C50 51.5 18.5 65.4345 18.5 45C18.5 24.5655 33.3643 23.6943 53.7988 23.6943C74.2333 23.6943 90.7988 40.2598 90.7988 60.6943Z" fill="#E7D3FF"/>
                           <path d="M54.25 37.41H20.8733L19.22 60.2467H20.15C20.9078 58.5933 21.7689 57.0778 22.7333 55.7C23.6978 54.2533 24.8344 53.0478 26.1433 52.0833C27.4522 51.05 28.9678 50.2578 30.69 49.7067C32.4122 49.1556 34.3756 48.88 36.58 48.88C39.5422 48.88 42.3322 49.3967 44.95 50.43C47.6367 51.4633 49.9789 52.9789 51.9767 54.9767C54.0433 56.9056 55.6622 59.3167 56.8333 62.21C58.0044 65.0344 58.59 68.2378 58.59 71.82C58.59 75.4711 57.97 78.8467 56.73 81.9467C55.49 85.0467 53.6644 87.7333 51.2533 90.0067C48.9111 92.28 45.9833 94.0711 42.47 95.38C38.9567 96.62 34.9611 97.24 30.4833 97.24C26.97 97.24 23.8356 96.8611 21.08 96.1033C18.3244 95.3456 15.8789 94.3467 13.7433 93.1067C11.6767 91.7978 9.85111 90.3167 8.26667 88.6633C6.75111 86.9411 5.44222 85.1844 4.34 83.3933L15.6033 74.5067C16.43 75.8844 17.2911 77.1933 18.1867 78.4333C19.1511 79.6733 20.2189 80.7756 21.39 81.74C22.63 82.6356 23.9733 83.3589 25.42 83.91C26.9356 84.3922 28.6578 84.6333 30.5867 84.6333C34.4444 84.6333 37.3378 83.6 39.2667 81.5333C41.2644 79.3978 42.2633 76.5733 42.2633 73.06V72.2333C42.2633 68.8578 41.2644 66.2056 39.2667 64.2767C37.2689 62.3478 34.5133 61.3833 31 61.3833C28.1067 61.3833 25.6956 61.9689 23.7667 63.14C21.9067 64.2422 20.4944 65.3444 19.53 66.4467L6.82 64.69L9.50667 23.8733H54.25V37.41Z" fill="black"/>
                       </svg>
                       <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">Connected Data</h3>
                   </div>
                   <div  className="flex flex-col">
                       <svg width="102" height="113" viewBox="0 0 102 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M23.0959 39.7622C19.386 32.4324 24.7125 23.7666 32.9277 23.7666H86C94.8366 23.7666 102 30.93 102 39.7666V81.2666C102 90.1032 94.8366 97.2666 86 97.2666H22.5082C21.3407 97.2666 21.1196 95.607 22.2465 95.3015L43.1347 89.6368C44.0431 89.3905 44.928 89.0645 45.7791 88.6626L49.6312 86.8435C56.6912 83.5097 59.6271 75.0209 56.1355 68.0376C53.8894 63.5454 49.397 60.6122 44.3809 60.3626L17 59L22.4328 50.8508C24.637 47.5445 24.8903 43.3076 23.0959 39.7622Z" fill="#E7D3FF"/>
                           <path d="M30.9067 96.22C26.6367 96.22 22.8072 95.5761 19.4183 94.2883C16.0972 92.9328 13.2844 91.035 10.98 88.595C8.67556 86.0872 6.91333 83.105 5.69333 79.6483C4.47333 76.1917 3.86333 72.3283 3.86333 68.0583C3.86333 63.1106 4.64278 58.4339 6.20167 54.0283C7.76056 49.555 9.76 45.4544 12.2 41.7267C14.7078 37.9311 17.4867 34.5422 20.5367 31.56C23.6544 28.5778 26.7383 26.07 29.7883 24.0367H50.8333C46.4278 27.0867 42.4628 30.035 38.9383 32.8817C35.4817 35.6606 32.4317 38.4733 29.7883 41.32C27.2128 44.0989 25.0778 46.9794 23.3833 49.9617C21.7567 52.9439 20.5706 56.1633 19.825 59.62L20.74 59.925C21.35 58.5694 22.0956 57.2478 22.9767 55.96C23.8578 54.6722 24.9422 53.5539 26.23 52.605C27.5178 51.5883 29.0089 50.775 30.7033 50.165C32.4656 49.555 34.4989 49.25 36.8033 49.25C39.7856 49.25 42.5644 49.7922 45.14 50.8767C47.7156 51.8933 49.9183 53.3844 51.7483 55.35C53.6461 57.2478 55.1372 59.5522 56.2217 62.2633C57.3061 64.9744 57.8483 68.0244 57.8483 71.4133C57.8483 75.0056 57.2044 78.3267 55.9167 81.3767C54.6289 84.4267 52.7989 87.07 50.4267 89.3067C48.1222 91.4756 45.3094 93.17 41.9883 94.39C38.6672 95.61 34.9733 96.22 30.9067 96.22ZM30.805 84.325C34.465 84.325 37.2439 83.3761 39.1417 81.4783C41.0394 79.5128 41.9883 76.7678 41.9883 73.2433V71.82C41.9883 68.2956 41.0056 65.6183 39.04 63.7883C37.1422 61.8906 34.3972 60.9417 30.805 60.9417C27.3483 60.9417 24.6372 61.8906 22.6717 63.7883C20.7061 65.6183 19.7233 68.2956 19.7233 71.82V73.2433C19.7233 76.7678 20.6383 79.5128 22.4683 81.4783C24.3661 83.3761 27.145 84.325 30.805 84.325Z" fill="black"/>
                       </svg>
                       <h3 className="mt-[0.8rem] md:mt-5  text-[0.9rem] md:text-2xl font-semibold font-Satoshi">Actionable Measurement</h3>
                   </div>
               </div>
           </section>
       </Container>
    )
}

export const SignupForms = () => {
    return (
       <Container>
           <section className="bg-[#100650] bg-auto bg-no-repeat bg-left-top mb-28 rounded-[24px] px-6 md:px-20 pb-12 ">
               <div className="flex flex-col md:flex-row pt-12">
                   <div className="flex-1">
                       <h1 className='w-full md:w-2/3  font-black font-Satoshi text-white text-[48px] leading-[57px]'>
                           Subscribe to Stay Up to Date
                       </h1>
                       <p className="font-Inter font-normal text-lg mt-3.5 text-white">Grow Your Business with our insights to the Digital Landscape</p>
                       <div className="flex flex-col mt-5 w-[300px]">
                           <input placeholder="your full name" className=" px-2 text-white bg-[#2D2466] border-[1px] border-white/20 h-[50px] py-2 rounded-[9px]" />
                           <input placeholder="your email address" className="px-2 bg-[#2D2466]  border-[1px] border-white/20 mt-3.5 h-[50px] py-2 rounded-[9px]" />
                           <button className="mt-3.5 flex flex-row justify-center text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2">
                               Subscribe
                           </button>
                       </div>
                   </div>
                   <div className="newsletter-image">
                        <img  src={vector} className="newsletter-vector-image" />
                        <img className="newsletter-main-image" src={signupimage} alt="" />
                    </div>
               </div>
           </section>
       </Container>
    )
}


export const TalkToUs = () => {
    return (
        <section className="bg-talk-cover pt-20 bg-[#E6F7F3] my-24">
            <div className="flex flex-col items-center">
                <span className='text-center font-Inter text-[#100650] font-medium uppercase h-[36px] bg-[#B5E0D6]/40 px-2.5 rounded-[6px] py-2'>
                        Talk to us
                    </span>
                <h3 className="mt-4 font-black leading-[3.5rem] font-Satoshi text-center md:text-left text-[42px]">
                    Talk With Our Digital Strategists
                </h3>
                <div className="mt-7">
                    <img src={require('../../assets/calender.png')} />
                </div>
            </div>
        </section>
    )
}


export const ReviewsSection = () => {
    return (
        <section className="bg-[#F5F5F9] my-[6rem] pt-[5.43rem] pb-[2.31rem]">
            <Container>
            <div className="flex flex-row justify-center">
                <h1 className="font-black text-[2.875rem] text-black font-Satoshi">
                    Nothing less than excellent
                </h1>
            </div>
            <div className="mt-[2.94rem] ">
                <Swiper {...sliderOptions} className="w-full flex md:flex-row flex-col">
                    <SwiperSlide className="bg-white rounded-[0.75rem] p-[2rem]">
                        <div className="">
                            <svg width="105" height="21" viewBox="0 0 105 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4337_397)">
                                    <path d="M19.2365 9.38257L15.5369 12.6113L16.6452 17.4184C16.7038 17.6696 16.6871 17.9327 16.5971 18.1745C16.507 18.4163 16.3477 18.6263 16.139 18.7781C15.9304 18.9298 15.6816 19.0168 15.4237 19.0279C15.1659 19.0391 14.9106 18.974 14.6895 18.8408L10.4969 16.2978L6.31334 18.8408C6.09232 18.974 5.83695 19.0391 5.57914 19.0279C5.32133 19.0168 5.07253 18.9298 4.86384 18.7781C4.65516 18.6263 4.49584 18.4163 4.40582 18.1745C4.3158 17.9327 4.29907 17.6696 4.35771 17.4184L5.46431 12.6162L1.76389 9.38257C1.56817 9.21377 1.42664 8.99094 1.35706 8.74203C1.28747 8.49311 1.29293 8.2292 1.37274 7.98337C1.45255 7.73755 1.60316 7.52075 1.80569 7.36019C2.00821 7.19962 2.25364 7.10242 2.51119 7.08077L7.38877 6.65831L9.29271 2.11706C9.39214 1.87878 9.55985 1.67523 9.77472 1.53206C9.98959 1.38889 10.242 1.3125 10.5002 1.3125C10.7584 1.3125 11.0108 1.38889 11.2257 1.53206C11.4406 1.67523 11.6083 1.87878 11.7077 2.11706L13.6174 6.65831L18.4933 7.08077C18.7509 7.10242 18.9963 7.19962 19.1988 7.36019C19.4014 7.52075 19.552 7.73755 19.6318 7.98337C19.7116 8.2292 19.7171 8.49311 19.6475 8.74203C19.5779 8.99094 19.4364 9.21377 19.2406 9.38257H19.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip1_4337_397)">
                                    <path d="M40.2365 9.38257L36.5369 12.6113L37.6452 17.4184C37.7038 17.6696 37.6871 17.9327 37.5971 18.1745C37.507 18.4163 37.3477 18.6263 37.139 18.7781C36.9304 18.9298 36.6816 19.0168 36.4237 19.0279C36.1659 19.0391 35.9106 18.974 35.6895 18.8408L31.4969 16.2978L27.3133 18.8408C27.0923 18.974 26.8369 19.0391 26.5791 19.0279C26.3213 19.0168 26.0725 18.9298 25.8638 18.7781C25.6552 18.6263 25.4958 18.4163 25.4058 18.1745C25.3158 17.9327 25.2991 17.6696 25.3577 17.4184L26.4643 12.6162L22.7639 9.38257C22.5682 9.21377 22.4266 8.99094 22.3571 8.74203C22.2875 8.49311 22.2929 8.2292 22.3727 7.98337C22.4525 7.73755 22.6032 7.52075 22.8057 7.36019C23.0082 7.19962 23.2536 7.10242 23.5112 7.08077L28.3888 6.65831L30.2927 2.11706C30.3921 1.87878 30.5598 1.67523 30.7747 1.53206C30.9896 1.38889 31.242 1.3125 31.5002 1.3125C31.7584 1.3125 32.0108 1.38889 32.2257 1.53206C32.4406 1.67523 32.6083 1.87878 32.7077 2.11706L34.6174 6.65831L39.4933 7.08077C39.7509 7.10242 39.9963 7.19962 40.1988 7.36019C40.4014 7.52075 40.552 7.73755 40.6318 7.98337C40.7116 8.2292 40.7171 8.49311 40.6475 8.74203C40.5779 8.99094 40.4364 9.21377 40.2406 9.38257H40.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip2_4337_397)">
                                    <path d="M61.2365 9.38257L57.5369 12.6113L58.6452 17.4184C58.7038 17.6696 58.6871 17.9327 58.5971 18.1745C58.507 18.4163 58.3477 18.6263 58.139 18.7781C57.9304 18.9298 57.6816 19.0168 57.4237 19.0279C57.1659 19.0391 56.9106 18.974 56.6895 18.8408L52.4969 16.2978L48.3133 18.8408C48.0923 18.974 47.8369 19.0391 47.5791 19.0279C47.3213 19.0168 47.0725 18.9298 46.8638 18.7781C46.6552 18.6263 46.4958 18.4163 46.4058 18.1745C46.3158 17.9327 46.2991 17.6696 46.3577 17.4184L47.4643 12.6162L43.7639 9.38257C43.5682 9.21377 43.4266 8.99094 43.3571 8.74203C43.2875 8.49311 43.2929 8.2292 43.3727 7.98337C43.4525 7.73755 43.6032 7.52075 43.8057 7.36019C44.0082 7.19962 44.2536 7.10242 44.5112 7.08077L49.3888 6.65831L51.2927 2.11706C51.3921 1.87878 51.5598 1.67523 51.7747 1.53206C51.9896 1.38889 52.242 1.3125 52.5002 1.3125C52.7584 1.3125 53.0108 1.38889 53.2257 1.53206C53.4406 1.67523 53.6083 1.87878 53.7077 2.11706L55.6174 6.65831L60.4933 7.08077C60.7509 7.10242 60.9963 7.19962 61.1988 7.36019C61.4014 7.52075 61.552 7.73755 61.6318 7.98337C61.7116 8.2292 61.7171 8.49311 61.6475 8.74203C61.5779 8.99094 61.4364 9.21377 61.2406 9.38257H61.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip3_4337_397)">
                                    <path d="M82.2365 9.38257L78.5369 12.6113L79.6452 17.4184C79.7038 17.6696 79.6871 17.9327 79.5971 18.1745C79.507 18.4163 79.3477 18.6263 79.139 18.7781C78.9304 18.9298 78.6816 19.0168 78.4237 19.0279C78.1659 19.0391 77.9106 18.974 77.6895 18.8408L73.4969 16.2978L69.3133 18.8408C69.0923 18.974 68.8369 19.0391 68.5791 19.0279C68.3213 19.0168 68.0725 18.9298 67.8638 18.7781C67.6552 18.6263 67.4958 18.4163 67.4058 18.1745C67.3158 17.9327 67.2991 17.6696 67.3577 17.4184L68.4643 12.6162L64.7639 9.38257C64.5682 9.21377 64.4266 8.99094 64.3571 8.74203C64.2875 8.49311 64.2929 8.2292 64.3727 7.98337C64.4525 7.73755 64.6032 7.52075 64.8057 7.36019C65.0082 7.19962 65.2536 7.10242 65.5112 7.08077L70.3888 6.65831L72.2927 2.11706C72.3921 1.87878 72.5598 1.67523 72.7747 1.53206C72.9896 1.38889 73.242 1.3125 73.5002 1.3125C73.7584 1.3125 74.0108 1.38889 74.2257 1.53206C74.4406 1.67523 74.6083 1.87878 74.7077 2.11706L76.6174 6.65831L81.4933 7.08077C81.7509 7.10242 81.9963 7.19962 82.1988 7.36019C82.4014 7.52075 82.552 7.73755 82.6318 7.98337C82.7116 8.2292 82.7171 8.49311 82.6475 8.74203C82.5779 8.99094 82.4364 9.21377 82.2406 9.38257H82.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip4_4337_397)">
                                    <path d="M103.237 9.38257L99.5369 12.6113L100.645 17.4184C100.704 17.6696 100.687 17.9327 100.597 18.1745C100.507 18.4163 100.348 18.6263 100.139 18.7781C99.9304 18.9298 99.6816 19.0168 99.4237 19.0279C99.1659 19.0391 98.9106 18.974 98.6895 18.8408L94.4969 16.2978L90.3133 18.8408C90.0923 18.974 89.8369 19.0391 89.5791 19.0279C89.3213 19.0168 89.0725 18.9298 88.8638 18.7781C88.6552 18.6263 88.4958 18.4163 88.4058 18.1745C88.3158 17.9327 88.2991 17.6696 88.3577 17.4184L89.4643 12.6162L85.7639 9.38257C85.5682 9.21377 85.4266 8.99094 85.3571 8.74203C85.2875 8.49311 85.2929 8.2292 85.3727 7.98337C85.4525 7.73755 85.6032 7.52075 85.8057 7.36019C86.0082 7.19962 86.2536 7.10242 86.5112 7.08077L91.3888 6.65831L93.2927 2.11706C93.3921 1.87878 93.5598 1.67523 93.7747 1.53206C93.9896 1.38889 94.242 1.3125 94.5002 1.3125C94.7584 1.3125 95.0108 1.38889 95.2257 1.53206C95.4406 1.67523 95.6083 1.87878 95.7077 2.11706L97.6174 6.65831L102.493 7.08077C102.751 7.10242 102.996 7.19962 103.199 7.36019C103.401 7.52075 103.552 7.73755 103.632 7.98337C103.712 8.2292 103.717 8.49311 103.647 8.74203C103.578 8.99094 103.436 9.21377 103.241 9.38257H103.237Z" fill="#FFB320"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4337_397">
                                        <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(21)"/>
                                    </clipPath>
                                    <clipPath id="clip2_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(42)"/>
                                    </clipPath>
                                    <clipPath id="clip3_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(63)"/>
                                    </clipPath>
                                    <clipPath id="clip4_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(84)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="my-[1.5rem] font-Inter mt-4 font-normal text-lg leading-[30px]">
                                “I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”
                            </p>
                            <div className="flex flex-row items-start">
                                <img className="w-[3.5rem] rounded-[3.5rem] h-[3.5rem]" src={require('../../assets/avatar.png')} />
                                <div className='ml-5'>
                                    <p className="font-Inter font-semibold text-[1rem]">
                                        Name Surname
                                    </p>
                                    <p className="font-Inter font-normal text-[1rem]">
                                        Position, Company name
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-[0.75rem] p-[2rem]">
                        <div className="">
                            <svg width="105" height="21" viewBox="0 0 105 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4337_397)">
                                    <path d="M19.2365 9.38257L15.5369 12.6113L16.6452 17.4184C16.7038 17.6696 16.6871 17.9327 16.5971 18.1745C16.507 18.4163 16.3477 18.6263 16.139 18.7781C15.9304 18.9298 15.6816 19.0168 15.4237 19.0279C15.1659 19.0391 14.9106 18.974 14.6895 18.8408L10.4969 16.2978L6.31334 18.8408C6.09232 18.974 5.83695 19.0391 5.57914 19.0279C5.32133 19.0168 5.07253 18.9298 4.86384 18.7781C4.65516 18.6263 4.49584 18.4163 4.40582 18.1745C4.3158 17.9327 4.29907 17.6696 4.35771 17.4184L5.46431 12.6162L1.76389 9.38257C1.56817 9.21377 1.42664 8.99094 1.35706 8.74203C1.28747 8.49311 1.29293 8.2292 1.37274 7.98337C1.45255 7.73755 1.60316 7.52075 1.80569 7.36019C2.00821 7.19962 2.25364 7.10242 2.51119 7.08077L7.38877 6.65831L9.29271 2.11706C9.39214 1.87878 9.55985 1.67523 9.77472 1.53206C9.98959 1.38889 10.242 1.3125 10.5002 1.3125C10.7584 1.3125 11.0108 1.38889 11.2257 1.53206C11.4406 1.67523 11.6083 1.87878 11.7077 2.11706L13.6174 6.65831L18.4933 7.08077C18.7509 7.10242 18.9963 7.19962 19.1988 7.36019C19.4014 7.52075 19.552 7.73755 19.6318 7.98337C19.7116 8.2292 19.7171 8.49311 19.6475 8.74203C19.5779 8.99094 19.4364 9.21377 19.2406 9.38257H19.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip1_4337_397)">
                                    <path d="M40.2365 9.38257L36.5369 12.6113L37.6452 17.4184C37.7038 17.6696 37.6871 17.9327 37.5971 18.1745C37.507 18.4163 37.3477 18.6263 37.139 18.7781C36.9304 18.9298 36.6816 19.0168 36.4237 19.0279C36.1659 19.0391 35.9106 18.974 35.6895 18.8408L31.4969 16.2978L27.3133 18.8408C27.0923 18.974 26.8369 19.0391 26.5791 19.0279C26.3213 19.0168 26.0725 18.9298 25.8638 18.7781C25.6552 18.6263 25.4958 18.4163 25.4058 18.1745C25.3158 17.9327 25.2991 17.6696 25.3577 17.4184L26.4643 12.6162L22.7639 9.38257C22.5682 9.21377 22.4266 8.99094 22.3571 8.74203C22.2875 8.49311 22.2929 8.2292 22.3727 7.98337C22.4525 7.73755 22.6032 7.52075 22.8057 7.36019C23.0082 7.19962 23.2536 7.10242 23.5112 7.08077L28.3888 6.65831L30.2927 2.11706C30.3921 1.87878 30.5598 1.67523 30.7747 1.53206C30.9896 1.38889 31.242 1.3125 31.5002 1.3125C31.7584 1.3125 32.0108 1.38889 32.2257 1.53206C32.4406 1.67523 32.6083 1.87878 32.7077 2.11706L34.6174 6.65831L39.4933 7.08077C39.7509 7.10242 39.9963 7.19962 40.1988 7.36019C40.4014 7.52075 40.552 7.73755 40.6318 7.98337C40.7116 8.2292 40.7171 8.49311 40.6475 8.74203C40.5779 8.99094 40.4364 9.21377 40.2406 9.38257H40.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip2_4337_397)">
                                    <path d="M61.2365 9.38257L57.5369 12.6113L58.6452 17.4184C58.7038 17.6696 58.6871 17.9327 58.5971 18.1745C58.507 18.4163 58.3477 18.6263 58.139 18.7781C57.9304 18.9298 57.6816 19.0168 57.4237 19.0279C57.1659 19.0391 56.9106 18.974 56.6895 18.8408L52.4969 16.2978L48.3133 18.8408C48.0923 18.974 47.8369 19.0391 47.5791 19.0279C47.3213 19.0168 47.0725 18.9298 46.8638 18.7781C46.6552 18.6263 46.4958 18.4163 46.4058 18.1745C46.3158 17.9327 46.2991 17.6696 46.3577 17.4184L47.4643 12.6162L43.7639 9.38257C43.5682 9.21377 43.4266 8.99094 43.3571 8.74203C43.2875 8.49311 43.2929 8.2292 43.3727 7.98337C43.4525 7.73755 43.6032 7.52075 43.8057 7.36019C44.0082 7.19962 44.2536 7.10242 44.5112 7.08077L49.3888 6.65831L51.2927 2.11706C51.3921 1.87878 51.5598 1.67523 51.7747 1.53206C51.9896 1.38889 52.242 1.3125 52.5002 1.3125C52.7584 1.3125 53.0108 1.38889 53.2257 1.53206C53.4406 1.67523 53.6083 1.87878 53.7077 2.11706L55.6174 6.65831L60.4933 7.08077C60.7509 7.10242 60.9963 7.19962 61.1988 7.36019C61.4014 7.52075 61.552 7.73755 61.6318 7.98337C61.7116 8.2292 61.7171 8.49311 61.6475 8.74203C61.5779 8.99094 61.4364 9.21377 61.2406 9.38257H61.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip3_4337_397)">
                                    <path d="M82.2365 9.38257L78.5369 12.6113L79.6452 17.4184C79.7038 17.6696 79.6871 17.9327 79.5971 18.1745C79.507 18.4163 79.3477 18.6263 79.139 18.7781C78.9304 18.9298 78.6816 19.0168 78.4237 19.0279C78.1659 19.0391 77.9106 18.974 77.6895 18.8408L73.4969 16.2978L69.3133 18.8408C69.0923 18.974 68.8369 19.0391 68.5791 19.0279C68.3213 19.0168 68.0725 18.9298 67.8638 18.7781C67.6552 18.6263 67.4958 18.4163 67.4058 18.1745C67.3158 17.9327 67.2991 17.6696 67.3577 17.4184L68.4643 12.6162L64.7639 9.38257C64.5682 9.21377 64.4266 8.99094 64.3571 8.74203C64.2875 8.49311 64.2929 8.2292 64.3727 7.98337C64.4525 7.73755 64.6032 7.52075 64.8057 7.36019C65.0082 7.19962 65.2536 7.10242 65.5112 7.08077L70.3888 6.65831L72.2927 2.11706C72.3921 1.87878 72.5598 1.67523 72.7747 1.53206C72.9896 1.38889 73.242 1.3125 73.5002 1.3125C73.7584 1.3125 74.0108 1.38889 74.2257 1.53206C74.4406 1.67523 74.6083 1.87878 74.7077 2.11706L76.6174 6.65831L81.4933 7.08077C81.7509 7.10242 81.9963 7.19962 82.1988 7.36019C82.4014 7.52075 82.552 7.73755 82.6318 7.98337C82.7116 8.2292 82.7171 8.49311 82.6475 8.74203C82.5779 8.99094 82.4364 9.21377 82.2406 9.38257H82.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip4_4337_397)">
                                    <path d="M103.237 9.38257L99.5369 12.6113L100.645 17.4184C100.704 17.6696 100.687 17.9327 100.597 18.1745C100.507 18.4163 100.348 18.6263 100.139 18.7781C99.9304 18.9298 99.6816 19.0168 99.4237 19.0279C99.1659 19.0391 98.9106 18.974 98.6895 18.8408L94.4969 16.2978L90.3133 18.8408C90.0923 18.974 89.8369 19.0391 89.5791 19.0279C89.3213 19.0168 89.0725 18.9298 88.8638 18.7781C88.6552 18.6263 88.4958 18.4163 88.4058 18.1745C88.3158 17.9327 88.2991 17.6696 88.3577 17.4184L89.4643 12.6162L85.7639 9.38257C85.5682 9.21377 85.4266 8.99094 85.3571 8.74203C85.2875 8.49311 85.2929 8.2292 85.3727 7.98337C85.4525 7.73755 85.6032 7.52075 85.8057 7.36019C86.0082 7.19962 86.2536 7.10242 86.5112 7.08077L91.3888 6.65831L93.2927 2.11706C93.3921 1.87878 93.5598 1.67523 93.7747 1.53206C93.9896 1.38889 94.242 1.3125 94.5002 1.3125C94.7584 1.3125 95.0108 1.38889 95.2257 1.53206C95.4406 1.67523 95.6083 1.87878 95.7077 2.11706L97.6174 6.65831L102.493 7.08077C102.751 7.10242 102.996 7.19962 103.199 7.36019C103.401 7.52075 103.552 7.73755 103.632 7.98337C103.712 8.2292 103.717 8.49311 103.647 8.74203C103.578 8.99094 103.436 9.21377 103.241 9.38257H103.237Z" fill="#FFB320"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4337_397">
                                        <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(21)"/>
                                    </clipPath>
                                    <clipPath id="clip2_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(42)"/>
                                    </clipPath>
                                    <clipPath id="clip3_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(63)"/>
                                    </clipPath>
                                    <clipPath id="clip4_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(84)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="my-[1.5rem] font-Inter mt-4 font-normal text-lg leading-[30px]">
                                “I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”
                            </p>
                            <div className="flex flex-row items-start">
                                <img className="w-[3.5rem] rounded-[3.5rem] h-[3.5rem]" src={require('../../assets/avatar.png')} />
                                <div className='ml-5'>
                                    <p className="font-Inter font-semibold text-[1rem]">
                                        Name Surname
                                    </p>
                                    <p className="font-Inter font-normal text-[1rem]">
                                        Position, Company name
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-white rounded-[0.75rem] p-[2rem]">
                        <div className="">
                            <svg width="105" height="21" viewBox="0 0 105 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4337_397)">
                                    <path d="M19.2365 9.38257L15.5369 12.6113L16.6452 17.4184C16.7038 17.6696 16.6871 17.9327 16.5971 18.1745C16.507 18.4163 16.3477 18.6263 16.139 18.7781C15.9304 18.9298 15.6816 19.0168 15.4237 19.0279C15.1659 19.0391 14.9106 18.974 14.6895 18.8408L10.4969 16.2978L6.31334 18.8408C6.09232 18.974 5.83695 19.0391 5.57914 19.0279C5.32133 19.0168 5.07253 18.9298 4.86384 18.7781C4.65516 18.6263 4.49584 18.4163 4.40582 18.1745C4.3158 17.9327 4.29907 17.6696 4.35771 17.4184L5.46431 12.6162L1.76389 9.38257C1.56817 9.21377 1.42664 8.99094 1.35706 8.74203C1.28747 8.49311 1.29293 8.2292 1.37274 7.98337C1.45255 7.73755 1.60316 7.52075 1.80569 7.36019C2.00821 7.19962 2.25364 7.10242 2.51119 7.08077L7.38877 6.65831L9.29271 2.11706C9.39214 1.87878 9.55985 1.67523 9.77472 1.53206C9.98959 1.38889 10.242 1.3125 10.5002 1.3125C10.7584 1.3125 11.0108 1.38889 11.2257 1.53206C11.4406 1.67523 11.6083 1.87878 11.7077 2.11706L13.6174 6.65831L18.4933 7.08077C18.7509 7.10242 18.9963 7.19962 19.1988 7.36019C19.4014 7.52075 19.552 7.73755 19.6318 7.98337C19.7116 8.2292 19.7171 8.49311 19.6475 8.74203C19.5779 8.99094 19.4364 9.21377 19.2406 9.38257H19.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip1_4337_397)">
                                    <path d="M40.2365 9.38257L36.5369 12.6113L37.6452 17.4184C37.7038 17.6696 37.6871 17.9327 37.5971 18.1745C37.507 18.4163 37.3477 18.6263 37.139 18.7781C36.9304 18.9298 36.6816 19.0168 36.4237 19.0279C36.1659 19.0391 35.9106 18.974 35.6895 18.8408L31.4969 16.2978L27.3133 18.8408C27.0923 18.974 26.8369 19.0391 26.5791 19.0279C26.3213 19.0168 26.0725 18.9298 25.8638 18.7781C25.6552 18.6263 25.4958 18.4163 25.4058 18.1745C25.3158 17.9327 25.2991 17.6696 25.3577 17.4184L26.4643 12.6162L22.7639 9.38257C22.5682 9.21377 22.4266 8.99094 22.3571 8.74203C22.2875 8.49311 22.2929 8.2292 22.3727 7.98337C22.4525 7.73755 22.6032 7.52075 22.8057 7.36019C23.0082 7.19962 23.2536 7.10242 23.5112 7.08077L28.3888 6.65831L30.2927 2.11706C30.3921 1.87878 30.5598 1.67523 30.7747 1.53206C30.9896 1.38889 31.242 1.3125 31.5002 1.3125C31.7584 1.3125 32.0108 1.38889 32.2257 1.53206C32.4406 1.67523 32.6083 1.87878 32.7077 2.11706L34.6174 6.65831L39.4933 7.08077C39.7509 7.10242 39.9963 7.19962 40.1988 7.36019C40.4014 7.52075 40.552 7.73755 40.6318 7.98337C40.7116 8.2292 40.7171 8.49311 40.6475 8.74203C40.5779 8.99094 40.4364 9.21377 40.2406 9.38257H40.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip2_4337_397)">
                                    <path d="M61.2365 9.38257L57.5369 12.6113L58.6452 17.4184C58.7038 17.6696 58.6871 17.9327 58.5971 18.1745C58.507 18.4163 58.3477 18.6263 58.139 18.7781C57.9304 18.9298 57.6816 19.0168 57.4237 19.0279C57.1659 19.0391 56.9106 18.974 56.6895 18.8408L52.4969 16.2978L48.3133 18.8408C48.0923 18.974 47.8369 19.0391 47.5791 19.0279C47.3213 19.0168 47.0725 18.9298 46.8638 18.7781C46.6552 18.6263 46.4958 18.4163 46.4058 18.1745C46.3158 17.9327 46.2991 17.6696 46.3577 17.4184L47.4643 12.6162L43.7639 9.38257C43.5682 9.21377 43.4266 8.99094 43.3571 8.74203C43.2875 8.49311 43.2929 8.2292 43.3727 7.98337C43.4525 7.73755 43.6032 7.52075 43.8057 7.36019C44.0082 7.19962 44.2536 7.10242 44.5112 7.08077L49.3888 6.65831L51.2927 2.11706C51.3921 1.87878 51.5598 1.67523 51.7747 1.53206C51.9896 1.38889 52.242 1.3125 52.5002 1.3125C52.7584 1.3125 53.0108 1.38889 53.2257 1.53206C53.4406 1.67523 53.6083 1.87878 53.7077 2.11706L55.6174 6.65831L60.4933 7.08077C60.7509 7.10242 60.9963 7.19962 61.1988 7.36019C61.4014 7.52075 61.552 7.73755 61.6318 7.98337C61.7116 8.2292 61.7171 8.49311 61.6475 8.74203C61.5779 8.99094 61.4364 9.21377 61.2406 9.38257H61.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip3_4337_397)">
                                    <path d="M82.2365 9.38257L78.5369 12.6113L79.6452 17.4184C79.7038 17.6696 79.6871 17.9327 79.5971 18.1745C79.507 18.4163 79.3477 18.6263 79.139 18.7781C78.9304 18.9298 78.6816 19.0168 78.4237 19.0279C78.1659 19.0391 77.9106 18.974 77.6895 18.8408L73.4969 16.2978L69.3133 18.8408C69.0923 18.974 68.8369 19.0391 68.5791 19.0279C68.3213 19.0168 68.0725 18.9298 67.8638 18.7781C67.6552 18.6263 67.4958 18.4163 67.4058 18.1745C67.3158 17.9327 67.2991 17.6696 67.3577 17.4184L68.4643 12.6162L64.7639 9.38257C64.5682 9.21377 64.4266 8.99094 64.3571 8.74203C64.2875 8.49311 64.2929 8.2292 64.3727 7.98337C64.4525 7.73755 64.6032 7.52075 64.8057 7.36019C65.0082 7.19962 65.2536 7.10242 65.5112 7.08077L70.3888 6.65831L72.2927 2.11706C72.3921 1.87878 72.5598 1.67523 72.7747 1.53206C72.9896 1.38889 73.242 1.3125 73.5002 1.3125C73.7584 1.3125 74.0108 1.38889 74.2257 1.53206C74.4406 1.67523 74.6083 1.87878 74.7077 2.11706L76.6174 6.65831L81.4933 7.08077C81.7509 7.10242 81.9963 7.19962 82.1988 7.36019C82.4014 7.52075 82.552 7.73755 82.6318 7.98337C82.7116 8.2292 82.7171 8.49311 82.6475 8.74203C82.5779 8.99094 82.4364 9.21377 82.2406 9.38257H82.2365Z" fill="#FFB320"/>
                                </g>
                                <g clip-path="url(#clip4_4337_397)">
                                    <path d="M103.237 9.38257L99.5369 12.6113L100.645 17.4184C100.704 17.6696 100.687 17.9327 100.597 18.1745C100.507 18.4163 100.348 18.6263 100.139 18.7781C99.9304 18.9298 99.6816 19.0168 99.4237 19.0279C99.1659 19.0391 98.9106 18.974 98.6895 18.8408L94.4969 16.2978L90.3133 18.8408C90.0923 18.974 89.8369 19.0391 89.5791 19.0279C89.3213 19.0168 89.0725 18.9298 88.8638 18.7781C88.6552 18.6263 88.4958 18.4163 88.4058 18.1745C88.3158 17.9327 88.2991 17.6696 88.3577 17.4184L89.4643 12.6162L85.7639 9.38257C85.5682 9.21377 85.4266 8.99094 85.3571 8.74203C85.2875 8.49311 85.2929 8.2292 85.3727 7.98337C85.4525 7.73755 85.6032 7.52075 85.8057 7.36019C86.0082 7.19962 86.2536 7.10242 86.5112 7.08077L91.3888 6.65831L93.2927 2.11706C93.3921 1.87878 93.5598 1.67523 93.7747 1.53206C93.9896 1.38889 94.242 1.3125 94.5002 1.3125C94.7584 1.3125 95.0108 1.38889 95.2257 1.53206C95.4406 1.67523 95.6083 1.87878 95.7077 2.11706L97.6174 6.65831L102.493 7.08077C102.751 7.10242 102.996 7.19962 103.199 7.36019C103.401 7.52075 103.552 7.73755 103.632 7.98337C103.712 8.2292 103.717 8.49311 103.647 8.74203C103.578 8.99094 103.436 9.21377 103.241 9.38257H103.237Z" fill="#FFB320"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4337_397">
                                        <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(21)"/>
                                    </clipPath>
                                    <clipPath id="clip2_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(42)"/>
                                    </clipPath>
                                    <clipPath id="clip3_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(63)"/>
                                    </clipPath>
                                    <clipPath id="clip4_4337_397">
                                        <rect width="21" height="21" fill="white" transform="translate(84)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="my-[1.5rem] font-Inter mt-4 font-normal text-lg leading-[30px]">
                                “I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap”
                            </p>
                            <div className="flex flex-row items-start">
                                <img className="w-[3.5rem] rounded-[3.5rem] h-[3.5rem]" src={require('../../assets/avatar.png')} />
                                <div className='ml-5'>
                                    <p className="font-Inter font-semibold text-[1rem]">
                                        Name Surname
                                    </p>
                                    <p className="font-Inter font-normal text-[1rem]">
                                        Position, Company name
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="flex flex-row items-center w-full justify-end md:px-16">
                    <div className="flex mt-12 mr-[0.31rem] flex-row space-x-5 items-center">
                        <button className="service-slider-prev">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="22.6034" transform="matrix(-1 0 0 1 46 0)" stroke="black" stroke-width="0.793103"/>
                                <g clip-path="url(#clip0_4301_4478)">
                                    <path d="M31.7266 23H14.2783" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.4141 30.1406L14.2761 23.0027L21.4141 15.8648" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4301_4478">
                                        <rect width="25.3793" height="25.3793" fill="white" transform="matrix(0 -1 -1 0 35.6914 35.6914)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className="service-slider-next">
                            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23.5508" cy="23" r="22.6034" stroke="black" stroke-width="0.793103"/>
                                <g clip-path="url(#clip0_4301_4484)">
                                    <path d="M14.8242 23H32.2725" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M25.1328 30.1406L32.2707 23.0027L25.1328 15.8648" stroke="black" stroke-width="1.58621" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4301_4484">
                                        <rect width="25.3793" height="25.3793" fill="white" transform="matrix(0 -1 1 0 10.8594 35.6914)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            </Container>
        </section>
    )
}

export const DreamTeam = () => {
    return (
       <Container>
           <section className="md:my-[6.44rem]">
               <div>
                   <h1 className="font-black text-[3.125rem] font-Satoshi text-center">Our dream team</h1>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[2.69rem] gap-y-[1.87rem] mt-[4.6rem]">
                       <div>
                           <img src={require('../../assets/team-1.png')} />
                           <div>
                               <h3 className="font-Inter font-medium text-[1.625rem]">Carl Jameson</h3>
                               <p className="font-Inter font-medium text-[1.125rem]">CEO</p>
                           </div>
                       </div>
                       <div>
                           <img src={require('../../assets/team-1.png')} />
                           <div>
                               <h3 className="font-Inter font-medium text-[1.625rem]">Carl Jameson</h3>
                               <p className="font-Inter font-medium text-[1.125rem]">CEO</p>
                           </div>
                       </div>
                       <div>
                           <img src={require('../../assets/team-1.png')} />
                           <div>
                               <h3 className="font-Inter font-medium text-[1.625rem]">Carl Jameson</h3>
                               <p className="font-Inter font-medium text-[1.125rem]">CEO</p>
                           </div>
                       </div>
                       <div>
                           <img src={require('../../assets/team-1.png')} />
                           <div>
                               <h3 className="font-Inter font-medium text-[1.625rem]">Carl Jameson</h3>
                               <p className="font-Inter font-medium text-[1.125rem]">CEO</p>
                           </div>
                       </div>
                       <div>
                           <img src={require('../../assets/team-1.png')} />
                           <div>
                               <h3 className="font-Inter font-medium text-[1.625rem]">Carl Jameson</h3>
                               <p className="font-Inter font-medium text-[1.125rem]">CEO</p>
                           </div>
                       </div>
                       <div>
                           <img src={require('../../assets/team-1.png')} />
                           <div>
                               <h3 className="font-Inter font-medium text-[1.625rem]">Carl Jameson</h3>
                               <p className="font-Inter font-medium text-[1.125rem]">CEO</p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </Container>
    )
}
