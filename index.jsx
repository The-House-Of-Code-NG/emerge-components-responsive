import { useState } from 'react';

import girl from '../assets/girl.svg'

import hero from '../assets/people-hold.svg'

import check from '../assets/check-icon.svg'
import vector from '../assets/hero-pattern.svg'
import chevronDown from '../assets/chevron-down.svg'
import chevronUp from '../assets/chevron-down(1).svg'
import t from '../assets/hero-pattern.svg'
import vector2 from '../assets/Vector(2).svg'
import check2 from '../assets/check-button.svg'

import img1 from '../assets/1.svg'
import img2 from '../assets/2.svg'
import img3 from '../assets/2(1).svg'
import img4 from '../assets/3.svg'
import img5 from '../assets/4.svg'

import ppc1 from '../assets/ppc(5).svg'
import ppc2 from '../assets/ppc(6).svg'
import ppc3 from '../assets/ppc(7).svg'
import ppc4 from '../assets/ppc(8).svg'
import ppc5 from '../assets/ppc(9).svg'

import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon3.svg'

import teamwork from '../assets/team.svg'
import dating from '../assets/dating.svg'
import time from '../assets/time.svg'
import digital from '../assets/digital.svg'

import plan1 from '../assets/plan1.svg'
import plan2 from '../assets/plan2.svg'
import plan3 from '../assets/plan3.svg'
import plan4 from '../assets/plan3.svg'

import caseImage from '../assets/case.svg'

const images = {
  url: hero,
  alt: "Hero Bg"
};

const imagesList = [
  {
    src: img1,
    alt: "Client 1"
  },
  {
    src: img2,
    alt: "Client 2"
  },
  {
    src: img3,
    alt: "Client 3"
  },
  {
    src: img4,
    alt: "Client 4"
  },
  {
    src: img5,
    alt: "Client 5"
  },
  {
    src: img1,
    alt: "Client 1"
  },
  {
    src: img2,
    alt: "Client 2"
  },
  {
    src: img3,
    alt: "Client 3"
  },
  {
    src: img4,
    alt: "Client 4"
  },
  {
    src: img5,
    alt: "Client 5"
  },

]

const ppcServices = [
  {
    id: 1,
    iconUrl: ppc1,
    title: "Google Ads",
    content: "Make your competitors look like amateurs. Bring in the sales. Unqualified leads, high CPCs, and poor performing ads are gone.",
  },
  {
    id: 2,
    iconUrl: ppc5,
    title: "Google Shopping",
    content: "Your sales goals can be crushed in record time with a bulletproof Google Shopping campaign.",
  },
  {
    id: 3,
    iconUrl: ppc4,
    title: "Bing Ads",
    content: "Boost conversion rates with a Bing ads campaign that hunts down leads your competitors have overlooked.",
  },
  {
    id: 4,
    iconUrl: ppc3,
    title: "Remarketing",
    content: "You can crush your competition with remarketing to stay top-of-mind and convert site visitors into customers.",
  },
]

const prising = {
  title: "PPC Package",
  plans: [
    {
      prices: ["Minimum Duration : 3 months", "No. of Keywords : 50", "Ad Budget : Up to $5000"],
      imageUrl: plan1,
      plan: "Min $1200",
      buttonText: "Check more",
      description: "Free plan for all users.",
      title: "Basic plan"
    },
    {
      prices: ["Minimum Duration : 3 months", "No. of Keywords : 50", "Ad Budget : Up to $5000"],
      imageUrl: plan2,
      plan: "Min $1200",
      buttonText: "Check more",
      description: "Free plan for all users.",
      title: "Basic plan"
    },
    {
      prices: ["Minimum Duration : 3 months", "No. of Keywords : 50", "Ad Budget : Up to $5000"],
      imageUrl: plan3,
      plan: "Min $1200",
      buttonText: "Check more",
      description: "Free plan for all users.",
      title: "Basic plan"
    }
    
  ]
}

const capabilities = [
  {

    id: 1,
    iconUrl: icon1,
    title: "Expertise in Searching",
    contentList: ["Aligned with best practices", "Goal-oriented optimization", "Automating strategically", "Measures for brand safety", "Certified experts"]
 
  },
  {

    id: 2,
    iconUrl: icon2,
    title: "Expertise in Searching",
    contentList: ["Aligned with best practices", "Goal-oriented optimization", "Automating strategically", "Measures for brand safety", "Certified experts"]
  },
  {

    id: 3,
    iconUrl: icon3,
    title: "Expertise in Searching",
    contentList: ["Aligned with best practices", "Goal-oriented optimization", "Automating strategically", "Measures for brand safety", "Certified experts"]
 
  },
  {

    id: 4,
    iconUrl: icon4,
    title: "Expertise in Searching",
    contentList: ["Aligned with best practices", "Goal-oriented optimization", "Automating strategically", "Measures for brand safety", "Certified experts"]
 
  }
]
  const text = [
      { id: 1, content: 'For maximum search return on investment, our award-winning team of search engine marketing experts uses the latest best practices and platform capabilities.', className: '' },
      { id: 2, content: 'The demand for SEM comes from consumers – A SEM Agency in Dubai Can Help You To Get More Customers', className: "font-bold" },
      { id: 3, content: 'With our fully certified search marketing specialists, you can be confident that your campaigns will engage users and reach your targets every time. In addition to our inherent test-and-learn approach, our teams use advanced machine learning capabilities and SEM product features to drive maximum results for your SEM campaigns.', className: "" },
    ]
    const benefits = [
      { id: 1, content: 'Enhance your search coverage with market-leading, proprietary keyword research tools', className: '' },
      { id: 2, content: 'Drive optimal efficiency and reduce budget waste with our integrated search approach', className: "" },
      { id: 3, content: 'Boost conversion rates with data-driven testing and expert insights', className: "" },
      { id: 4, content: 'Maintain a consistent presence in search results to build brand awareness', className: "" },
      { id: 5, content: 'Create an innovative, personalised search experience for relevant audiences', className: "" },
      { id: 5, content: 'We partner with all major SEM platforms to achieve the best results possible', className: "" },
    ]
  const button = { text: 'Contact Us', onClick: () => console.log('Sign Up clicked') };

  const caseStudy = {
    title: "PPC Agency",
    subtitle: "PAY-PER-CLICK (PPC)",
    button: { text: 'Book a FREE Strategy Session', onClick: () => console.log('Sign Up clicked') },
    image: { src: caseImage, alt: "Case study", topText: "See Our Case Studies", bottomText: "Here is how we 2x Revenue for eCommerce Vision & Eyecare Brand" },
    contents: ["ou’ll see a huge spike in sales if you target those in buying mode. In what way? When done correctly, Pay-Per-Click (PPC) advertising can be very powerful. You can have that power all to yourself. It is true that PPC platforms like Google Ads can immediately increase your website’s traffic", "Optimizing the number of clicks that result in sales is essential when every click costs money. As Emerge Digital is the best PPC Agency in Dubai UAE , we optimize your Ads campaign for profit and performance, so you spend less and earn more. There is a lot more. Campaigns that target those that are ready to buy are designed to be meaningful and hyper-targeted"]
  }

  const stages = [
    {
      id: 1,
      title: "Using SEM to drive business results",
      image: {
        alt: "Team Work",
        src: teamwork
      },
      content: "We help you define clear, measurable KPIs for your business. We optimize your website to achieve this goal so that your business performs at its best."
    },
    {
      id: 2,
      title: "Expertise in Searching",
      image: {
        alt: "Dating",
        src: dating
      },
      content: "We ensure that your search engine marketing campaigns are designed with your marketing goals in mind, reflecting the most current best practices."
    },
    {
      id: 3,
      title: "Reports on SEM",
      image: {
        alt: "Time Management",
        src: time
      },
      content: "By using automated tools, we can create real-time dashboards tailored to your needs and KPIs, enabling our SEM specialists to deliver actionable insights."
    },
    {
      id: 4,
      title: "Innovating Search Marketing",
      image: {
        alt: "Digital",
        src: digital
      },
      content: "We help you define clear, measurable KPIs for your business. We optimize your website to achieve this goal so that your business performs at its best."
    },
  ]


  const items = [
    { title: 'Is there a free tier?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'How much does it cost if I need more?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'Is experia also available for Enterprise?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'What does success look like for experia?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'How many active users are available in the free plan?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'Who is experia tool designed for?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'How can I get a custom plan?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
  ];

  function Benefits({ benefits, title }) {
  
    return (
      <Container>
          <div className="w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-[2.12rem] lg:text-[2.5rem] lg:text-left text-center mt-[6.18rem] lg:mb-[4.18rem] mb-[2.37rem] font-[900] leading-[3.43rem] lg:leading-[4.12rem]">{title}</h2>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-[2.62rem]">
              {benefits.map((benefit, index) => (
                <div className="flex">
                  <img src={check} alt="Check Icon" />
                  <p className="text-lg ml-[1.31rem]">{benefit.content}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
      </Container>
    );
  }

  function Tag({ children, transparent }) {
  
    return (
      <button className={`${transparent ? "bg-white bg-opacity-10 text-white" : "bg-[#4A00FF0F]"} text-[#100650] lg:text-lg text-[0.87rem] text-left rounded-[6px] px-2.5`}>
          {children}
      </button>
    );
  }

  function Button({ children, size, onClick }) {
  
    return (
      <button className={`all-[unset] box-border flex ${size === "sm" ? "w-full lg:w-[183.58px] h-[52px]" : 'w-full lg:w-[304px] h-[54px]'} items-center justify-center pt-[6px] pb-[8px] px-[14px] bg-[#8959ff] rounded-[8px] overflow-hidden`} onClick={onClick}>
      <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
        {children}
      </div>
    </button>
    );
  }

  function Masthead({ pageTitle, breadcrumbs }) {
  
    return (
      <div className="semppc-management">
        <img className='artboard' src={t} alt="" />
          <div className="inner">
          <h2 className="text-white font-[900] text-[1.62rem] lg:text-[2.5rem] text-center">{pageTitle}</h2>
          </div>
      </div>
    );
  }

  function Container({ children }) {
  
    return (
      <div className="w-full lg:px-[6.87rem] px-[1.68rem]">
        {children}
      </div>
    );
  }

  function Hero({ title, subtitle, text, button, image }) {
  
    return (
      <Container>
          <div className="w-full py-[5.37rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="text-block w-full">
                  <Tag>{subtitle}</Tag>
                  <h2 className="text-[3.5rem] my-[1.81rem] leading-[3.94rem] font-[900]">{title}</h2>
                  {text.map((t, index) => (
                      <p className={`mb-[1.81rem] ${t.className}`} key={t.id}>{t.content}</p>
                  ))}
                  <Button>{button.text}</Button>
              </div>
              <div className="image-wrapper w-full lg:block hidden">
                  <img src={image.url} alt={image.alt} className="w-full" />
              </div>
          </div>
      </div>
      </Container>
    );
  }

  function Pricing({ plans, title }) {
  
    return (
      <Container>
        <div className="w-full flex flex-col justify-center items-center h-full relative">
        <h1 className="lg:text-[3.5rem] text-[2.62rem] mt-[6.18rem] mb-[5.62rem] font-[900] leading-[3.93rem] lg:leading-[4.12rem]">{title}</h1>
        <div className="flex flex-col lg:flex-row lg:gap-x-[2.68rem] gap-y-[1.31rem]">
          {plans.map((plan, index) => (
              <div className="bg-[#f3f4f5] rounded-[22.87px] py-[2rem] px-[2.5rem]">
                  <img src={plan.imageUrl} alt={title} className="w-[72px] h-[74px]" />
              <h4 className="text-[1.37rem] font-[900] leading-[4.12rem]">{title}</h4>
              <div className="text-black text-[34.03px] my-[1.37rem] font-medium font-['Poppins'] leading-[42.54px]">{plan.plan}</div>
              <Button size='sm' onClick={() => null}>{plan.buttonText}</Button>
              <div className="text-black text-[17.15px] my-[1.37rem] font-normal font-['Aeonik'] leading-normal">{plan.description}</div>
              <div className="w-full">
                  {plan.prices.map((price, index) => (
                  <div className="flex w-full items-center mb-[0.6px]" key={index}>
                      <img src={check2} className='w-[1.68rem] h-[1.68rem] mr-[0.68rem]' alt={price} />
                      <div className="text-black text-[1.06rem] font-normal font-['Aeonik'] leading-normal">{price}</div>
                  </div>
                  ))}
              </div>
              <div className="absolute left-full top-0" style={
                  {
                      backgroundImage: `url(${vector2}) no-repeat center center cover`
                  }
              }>
              </div>
              </div>
          ))}
        </div>
          </div>
      </Container>
    );
  }

  function Stages({ stages, title, buttonText }) {
  
    return (
      <Container>
          <div className="flex w-full flex-col items-center justify-center pt-[10.37rem]">
              <h2 className="text-center text-black text-[2.25rem] lg:text-[2.5rem] font-black font-['Satoshi'] leading-[3.94rem]">{title}</h2>
              <div className="grid grid-cols-1">
                  {stages.map((stage, index) => (
                      <div className={`flex flex-col-reverse lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`} key={stage.id}>
                          <img className='w-full' src={stage.image.src} alt={stage.image.alt} />
                          <div className="w-full">
                          <div className="w-10 h-10 bg-violet-500 rounded-[3.31rem] flex-col justify-center items-center gap-2.5 inline-flex">
                              <div className="text-white text-xl font-black font-['Satoshi'] leading-[2.06]">{stage.id}</div>
                          </div>
                          <h2 className="text-black text-[2.5rem] my-[1.68rem] font-black font-['Satoshi'] leading-[2.91rem]">{stage.title}</h2>
                          <p className="text-lg leading-[1.84rem]">{stage.content}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <Button>{buttonText}</Button>
          </div>
      </Container>
    );
  }

  function Accordion({ items, title }) {

    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      setActiveIndex((prevActiveIndex) => (prevActiveIndex === index ? null : index));
    };
  
    return (
      <Container>
          <div className="w-full mt-[7.31rem]">
          <h2 className="text-center text-black text-[2.5rem] mb-[4.75rem] font-black font-['Satoshi'] leading-[3.94rem]">{title}</h2>
              {items.map((item, index) => (
              <div key={index} className={`w-full  ${activeIndex === index && 'active'} ${index !== 0 && 'mt-[2.18rem]'}`}>
                  <button
                      className="accordion-button flex justify-between w-full"
                      onClick={() => handleToggle(index)}
                  >
                      <h4 className="text-[1.62rem] lg:text-[1.87rem] leading-[2.12rem] mb-[1.5rem] font-bold">{item.title}</h4>
                      
                      {activeIndex === index ? <img src={chevronUp} alt="Chevron Icon" /> : <img src={chevronDown} alt="Chevron Icon" />}
                  </button>
                  <p className={`leading-[2.18rem] text-lg ${activeIndex === index ? "block" : "hidden"}`}>
                      {item.content}
                  </p>
                  <div className="ml-2 border border-b border-black" />
              </div>
          ))}
          </div>
      </Container>
    );
  }

  function CaseStudy({ subtitle, title, contents, image, button }) {
  
    return (
      <div className="w-full min-h-[51.18rem] bg-[#100650] mt-[8.37rem] relative">
          {/* <div className='absolute left-full top-0 w-[72.87rem] h-[45.25rem] bg-no-repeat bg-center bg-cover' style={{ 
              backgroundImage: `url(${vector}) no-repeat center center`
           }} /> */}
          <Container>
          <div className="w-full py-[5.37rem]">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[7.81rem] gap-y-[7.81rem]">
              <div className="text-block w-full">
                  <Tag transparent>{subtitle}</Tag>
                  <h2 className="text-[3.5rem] text-white my-[1.43rem]">{title}</h2>
                  {contents.map((t, index) => (
                      <p className="mb-[1.81rem] text-white" key={index}>{t}</p>
                  ))}
                  <Button onClick={button.onClick}>{button.text}</Button>
              </div>
             <div className="w-full ">
              <h2 className="text-white text-center text-[2rem] font-black font-['Satoshi'] leading-[3.93rem]">{image.topText}</h2>
                  <div className="lg:w-[26.87rem] w-full h-[30.31rem] relative">
                      <img className="w-full h-full rounded-[0.56rem] left-0.5625rem top-1.125rem absolute" src={image.src} alt={image.alt} />
                      <div className="text-center absolute flex justify-center items-center px-[1.37rem] top-[23.94rem] left-0 w-full h-[6.37rem] backdrop-blur-[18.70px] bg-white bg-opacity-50 text-black text-xl font-black font-['Satoshi'] leading-1.9rem">{image.bottomText}</div>
                  </div>
             </div>
  
          </div>
      </div>
          </Container>
      </div>
    );
  }

  function PpcServices({ ppcServices, title, content }) {
  
    return (
          <div className="w-full min-h-[51.18rem] bg-[#100650] py-[3.5rem] lg:py-[8.37rem]">
      <Container>
        <div className="w-full flex flex-col justify-center h-full">
            <h2 className="text-2xl mt-[6.18rem] text-white font-[900] leading-[4.12rem]">{title}</h2>
            <p className="text-lg leading-7 font-normal text-white">{content}</p>
            <div className="w-full flex lg:flex-row flex-col gap-[2rem] mt-[3.37rem] mb-[2.93rem]">
              {ppcServices.map((ppcService, index) => (
                <div className="flex flex-col px-[1.62rem] py-[2.06rem] bg-[#F7F5FC] rounded-[1.25rem] w-full min-h-[24.12rem]" key={ppcService.id}>
                  <img src={ppcService.iconUrl} className='w-[3.18rem] h-[3.18rem]' alt={ppcService.title} />
                  <h4 className="text-2xl font-[900] mt-[2.43rem] mb-[1.43rem]">{ppcService.title}</h4>
                  <p className="text-lg">{ppcService.content}</p>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <Button>Contact Us</Button>
            </div>
          </div>
      </Container>
          
      </div>
    );
  }
  

  function Capabilities({ capabilities, title, content }) {
  
    return (
      <div className="overflow-auto lg:px-[6.87rem] px-[1.68rem] pt-[6.18rem]">
          <div className="w-full">
          <div className="lg:w-1/2 mb-[1.93rem]">
          <h2 className="text-[2.12rem] lg:text-[2.5rem] mt-[6.18rem] lg:mb-[4.18rem] mb-5 font-[900] leading-[3.43rem] lg:leading-[4.12rem]">{title}</h2>
            <p className="text-lg leading-7 font-normal">{content}</p>
            </div>
            <div className="w-full flex lg:gap-[2rem] gap-[1.06rem]">
              {capabilities.map((capability, index) => (
                <div className="px-[1.62rem] basis-[20.75rem] w-[20.75rem] py-[2.06rem] bg-[#F7F5FC] rounded-[1.25rem] lg:w-[23.31rem] min-h-[24.12rem]" key={capability.id}>
                  <img src={capability.iconUrl} className='w-[3.18rem] h-[3.18rem]' alt={capability.title} />
                  <h4 className="text-2xl font-[900] mt-[2.43rem] mb-[1.43rem]">{capability.title}</h4>
                  <ul className='list-disc'>
                      {capability.contentList.map((c, index) => (
                          <li className="text-lg" key={index}>{c}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
      </div>
    );
  }

  function Clients({ images, title }) {
  
    return (
      <div style={{ backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F4F0FF 100%)' }} className="w-full h-[10.048rem]">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-[500] leading-[4.12rem]">{title}</h2>
            <div className="w-full flex gap-[2.62rem]">
              {images.map((img, index) => (
                <img src={img.src} key={index} alt={img.alt} className="w-[7.77rem] h-[2.79rem]" />
              ))}
            </div>
          </div>
      </div>
    );
  }
  
 function InputComponent({ placeholder, onChange, value }) {

    return (
      <div className="lg:w-[304px] w-full h-[50px]">
      <input placeholder={placeholder} onChange={onChange} className="w-full h-full px-[1.43rem] bg-[#2d2466] rounded-[9px] border border-solid border-[#ffffff30]" />
    </div>
    );
  }

  function Newsletter({ subtitle, title, buttonText, imageSrc }) {

    return (
      <Container>
         <div className="w-full px-[1.56rem] lg:px-[5.37rem] py-[3.06rem] min-h-[30.37rem] mt-[5.12rem] rounded-[1.5rem] bg-[#100650] flex flex-col lg:flex-row  justify-between">
          <div className="">
              <h2 className="text-white text-[2.68rem] font-[900] leading-[3.56rem]">{title}</h2>
              <p className="text-white leading-[2.18rem] mb-[1.18rem]">{subtitle}</p>
              <InputComponent placeholder='Your Full Name' />
              <div className="mt-[0.87rem]"></div>
              <InputComponent placeholder='Your Email' />
              <div className="mt-[0.87rem]"></div>
              <Button>{buttonText}</Button>
          </div>
  
          <div className="w-full lg:w-[30rem] mt-[3.18rem] lg:mt-0 h-full relative" style={{ backgroundImage: `url(${vector})` }}>
              <img className='w-full h-full' src={vector2} alt="" />
              <img className='w-full lg:w-[24.87rem] h-full absolute left-0 top-0' src={imageSrc} alt="" />
          </div>
         </div>
      </Container>
    );
  }

function Service() {
  return (
    <div>
      <Masthead pageTitle='Search Engine Marketing (SEM) & PPC Management' />
      <Hero title='SEM Agency' subtitle='SEARCH ENGINE MARKETING (SEM) & GOOGLE ADS AGENCY' text={text} button={button} image={images}  />
      <Clients title="Our Happy Clients" images={imagesList} />
      <Benefits title='Why Search Engine Marketing Is Beneficial?' benefits={benefits} />
      <Capabilities title='Capabilities in Search Engine Marketing' content="Our SEM specialists are results-driven and strive for continuous improvement for clients. Here's what you can expect from our SEM Services:" capabilities={capabilities} />
      <PpcServices title='Our PPC Services' content='Boost your paid search performance with custom campaigns leveraging the right platforms.' ppcServices={ppcServices} />
      <Pricing plans={prising.plans} title={prising.title} />
      <CaseStudy title={caseStudy.title} subtitle={caseStudy.subtitle} button={caseStudy.button} contents={caseStudy.contents} image={caseStudy.image} />
      <Stages buttonText='Book a FREE Strategy Session' title='What Are the 4 Stages of Demand Generation?' stages={stages} />
      <Accordion title='Frequently asked questions' items={items} />
      <Newsletter title='Subscribe to Stay Up to Date' subtitle='Grow Your Business with our insights to the Digital Landscape' buttonText='Subscribe' imageSrc={girl} />
    </div>
  );
}

export default Service;
