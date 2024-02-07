import { useState } from 'react';
import Container from '../../shared/container';
import chevronDown from '../../../assets/chevron-down.svg'
import chevronUp from '../../../assets/chevron-down(1).svg'

interface IProps {
    title: string;
    items: Array<{
        title: string;
        content: string;
    }>
}

export default function Accordion({ items, title }: IProps) {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: any) => {
    setActiveIndex((prevActiveIndex) => (prevActiveIndex === index ? null : index));
  };

  return (
    <Container>
        <div className="w-full mt-[7.31rem]">
        <h2 className="text-center text-black text-[30px] mb-[4.75rem] font-bold font-Satoshi leading-[3.94rem]">{title}</h2>
            {items.map((item, index) => (
            <div key={index} className={`w-full  ${activeIndex === index && 'active'} ${index !== 0 && 'mt-[2.18rem]'}`}>
                <div
                    className="accordion-button flex justify-between w-full cursor-pointer"
                    onClick={() => handleToggle(index)}
                >
                    <h4 className="mb-[1.5rem] text-[1.62rem] lg:text-[30px] font-Satoshi leading-[2.12rem] font-bold">{item.title}</h4>

                    {activeIndex === index ? <img src={chevronUp} alt="Chevron Icon" /> : <img src={chevronDown} alt="Chevron Icon" />}
                </div>
                {activeIndex === index && (
                    <p className={`mt-[0.5rem] mb-[1rem] font-Inter font-normal text-[1.125rem] leading-[2.18994rem]`}>
                        {item.content}
                    </p>
                )}
                <div className="ml-2 border-b-[0.0625rem] border-[#282828]" />
            </div>
        ))}
        </div>
    </Container>
  );
}
