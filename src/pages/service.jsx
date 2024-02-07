import { useState } from 'react';

import girl from '../assets/girl.svg'

import hero from '../assets/people-hold.svg'

import pattern from "../assets/hero-pattern.svg"

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
import Footer from '../components/footer';
import Navbar from '../components/header';

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
            <h2 className="text-[2.12rem] lg:text-[2.5rem] lg:text-left text-center lg:mb-[4.18rem] mb-[2.37rem] font-[900] leading-[3.43rem] lg:leading-[4.12rem]">{title}</h2>
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
      <div className={`w-fit ${transparent ? "bg-white bg-opacity-10 text-white" : "bg-[#4A00FF0F]"} text-[#100650] flex justify-center items-center lg:text-lg text-[0.87rem] text-left rounded-[6px] px-2.5`}>
          {children}
      </div>
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
      <section style={{ backgroundImage: `url(${pattern})` }} className={`relative h-[199px] bg-[#100650] bg-no-repeat bg-right-top bg-cover`}>
        <div className="relative flex items-center justify-center h-full">
          <h2 className="text-white font-satoshi font-bold text-4xl text-lg md:text-5xl -webkit-text-stroke-width:1 -webkit-text-stroke-color:black">{pageTitle}</h2>
        </div>
      </section>
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
                  <img src={image.url} alt={image.alt} className="w-full object-cover h-full" />
              </div>
          </div>
      </div>
      </Container>
    );
  }


  function Pricing({ plans, title }) {
    return (
      <Container>
          <div className="pricing-container">
        <h1 className="pricing-title">{title}</h1>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className="pricing-item" key={index}>
              <img src={plan.imageUrl} alt={title} className="pricing-item-image" />
              <h4 className="pricing-item-title">{title}</h4>
              <div className="pricing-item-plan">{plan.plan}</div>
              <Button size="sm" onClick={() => null}>{plan.buttonText}</Button>
              <div className="pricing-item-description">{plan.description}</div>
              <div className="pricing-item-prices">
                {plan.prices.map((price, index) => (
                  <div className="pricing-item-price" key={index}>
                    <img src={check2} alt={price} className="pricing-item-price-check" />
                    <div className="pricing-item-price-text">{price}</div>
                  </div>
                ))}
              </div>
              {/* <div className="pricing-item-background"></div> */}
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
        <div className="stages-container">
        <h2 className="stages-title">{title}</h2>
        <div className="stages-grid">
          {stages.map((stage, index) => (
            <div className={`stage-item ${index % 2 === 0 ? 'stage-item-reverse' : ''}`} key={stage.id}>
              <img className="stage-image" src={stage.image.src} alt={stage.image.alt} />
              <div className="stage-content">
                <div className="stage-number-container">
                  <div className="stage-number">{stage.id}</div>
                </div>
                <h2 className="stage-title">{stage.title}</h2>
                <p className="stage-content-text">{stage.content}</p>
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
      <div className="accordion-container">
      <h2 className="accordion-title">{title}</h2>
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${activeIndex === index && 'active'} ${index !== 0 && 'mt-2'}`}>
          <button className="accordion-button" onClick={() => handleToggle(index)}>
            <h4 className="accordion-item-title">{item.title}</h4>
            <img src={activeIndex === index ? chevronUp : chevronDown} alt="Chevron Icon" />
          </button>
          <p className={`accordion-item-content ${activeIndex === index ? 'block' : 'hidden'}`}>
            {item.content}
          </p>
          <div className="accordion-divider" />
        </div>
      ))}
    </div>
    </Container>
  );
}


  function CaseStudy({ subtitle, title, contents, image, button }) {
    return (
      <div className="case-study-container">
        <Container>
          <div className="case-study-content">
            <div className="grid-container">
              <div className="text-block">
                <Tag transparent>{subtitle}</Tag>
                <h2 className="case-study-title">{title}</h2>
                {contents.map((t, index) => (
                  <p className="case-study-content-text" key={index}>{t}</p>
                ))}
                <Button onClick={button.onClick}>{button.text}</Button>
              </div>
              <div className="image-block">
                <h2 className="image-top-text">{image.topText}</h2>
                <div className="image-wrapper">
                  <img className="image" src={image.src} alt={image.alt} />
                  <div className="image-bottom-text">{image.bottomText}</div>
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
      <div className="ppc-services-container">
        <div className="ppc-services-background" style={{ backgroundColor: "#100650" }}>
          <Container>
            <div className="ppc-services-content">
              <h2 className="ppc-services-title">{title}</h2>
              <p className="ppc-services-description">{content}</p>
              <div className="ppc-services-list">
                {ppcServices.map((ppcService, index) => (
                  <div className="ppc-service-item" key={ppcService.id}>
                    <img src={ppcService.iconUrl} alt={ppcService.title} />
                    <h4 className="ppc-service-title">{ppcService.title}</h4>
                    <p className="ppc-service-content">{ppcService.content}</p>
                  </div>
                ))}
              </div>
              <div className="ppc-services-cta">
                <Button>Contact Us</Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }



  function Capabilities({ capabilities, title, content }) {
  
    return (
      <div className="overflow-auto lg:px-[6.87rem] px-[1.68rem] pt-[6.18rem]">
          <div className="w-full">
          <div className="lg:w-1/2 mb-[1.93rem]">
          <h2 className="text-[2.12rem] lg:text-[2.5rem] mb-5 font-[900] leading-[3.43rem] lg:leading-[4.12rem]">{title}</h2>
            <p className="text-lg leading-7 font-normal">{content}</p>
            </div>
            <div className="w-full flex lg:gap-[2rem] gap-[1.06rem]">
              {capabilities.map((capability, index) => (
                <div className="px-[1.62rem] basis-[20.75rem] w-[20.75rem] py-[2.06rem] bg-[#F7F5FC] rounded-[1.25rem] lg:w-[23.31rem] min-h-[24.12rem]" key={capability.id}>
                  <img src={capability.iconUrl} className='w-[3.18rem] h-[3.18rem]' alt={capability.title} />
                  <h4 className="text-2xl font-[900] mt-[2.43rem] mb-[1.43rem]">{capability.title}</h4>
                  <ul className='list-disc'>
                      {capability.contentList.map((c, index) => (
                          <li className="text-sm" key={index}>{c}</li>
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
      <div
        className="clients-background"
      >
        <div className="clients-content">
          <h2
            className="clients-title text-2xl font-semibold leading-14rem"
          >
            {title}
          </h2>
          <div className="marquee-container">
            <div className="clients-images marquee-content">
              {images.map((img, index) => (
                <img
                  src={img.src}
                  key={index}
                  alt={img.alt}
                  className="clients-image w-7.77rem h-2.79rem"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }


  function InputComponent({ placeholder, onChange, value }) {
    return (
      <div className="input-container">
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="input-field"
        />
      </div>
    );
  }
  


  function Newsletter({ subtitle, title, buttonText, imageSrc }) {
    return (
      <Container>
        <div className="newsletter-container">
        <div className="newsletter-text">
          <h2 className="newsletter-title">{title}</h2>
          <p className="newsletter-subtitle">{subtitle}</p>
          <InputComponent placeholder="Your Full Name" />
          <div className="newsletter-spacing"></div>
          <InputComponent placeholder="Your Email" />
          <div className="newsletter-spacing"></div>
          <Button>{buttonText}</Button>
        </div>
        <div className="newsletter-image">
          <img className="newsletter-vector-image" src={vector2} alt="" />
          <img className="newsletter-main-image" src={imageSrc} alt="" />
        </div>
      </div>
      </Container>
    );
  }



function Service() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
export default Service;
