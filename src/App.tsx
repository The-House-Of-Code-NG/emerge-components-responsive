import React from 'react';
import './App.css';
import {Container} from "./sections/homepage/components/Container";
import {
    CallToActionSection,
    Clients, DreamTeam,
    HomepageHero,
    OurServices,
    Partnership, ReviewsSection, SignupForms,
    Steps, TalkToUs,
    WhatWeDo
} from "./sections/homepage/Hero";
import Accordion from "./components/service-page/faq";
import Navbar from './components/header';
import Footer from './components/footer';


const items = [
    { title: 'Is there a free tier?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'How much does it cost if I need more?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'Is experia also available for Enterprise?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'What does success look like for experia?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'How many active users are available in the free plan?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'Who is experia tool designed for?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
    { title: 'How can I get a custom plan?', content: 'You get one free concurrent deployment with the Free tier. The Team tier includes 2 concurrent builds and you can buy more for $25/mo/concurrent build.' },
];

function App() {
  return (
    <>
        <Navbar />
        <HomepageHero
            imageSrc="/homepage-hero-image.png"
            tagText="OUR EXPERIENCES BOOST YOUR BUSINESS"
            heroHeading="Data-Driven Marketing Solutions"
            homepageParagraph="We envision serving as an all-in-one partner across content, data, and digital media in an ever-evolving combination of digital expertise."
        />
        <Clients/>
        <WhatWeDo />
        <CallToActionSection />
        <OurServices />
        <Partnership/>
        <Steps />
        <SignupForms />
        <TalkToUs />
        <Accordion title='Frequently asked questions' items={items} />
        <ReviewsSection />
        <DreamTeam />
        <Footer />
          {/* <div className="image rounded-[50%] bg-[url("></div>
          <div className="bar flex justify-between w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
          </div> */}
    </>

  );
}

export default App;
