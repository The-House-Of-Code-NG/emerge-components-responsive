import Pc from "../assets/newComp/pc.svg";
import MockupHand from "../assets/newComp/logo mockup.png";
import Dollar from "../assets/newComp/dollar.svg";
import DonateImage from "../assets/newComp/donate.svg";

type SatifactoryProps = {
  title: string;
  tag: string;
  paragraph: string;
};

const Satifactory: React.FC<SatifactoryProps> = ({ title, tag, paragraph }) => {
  return (
    <section className="bg-[#100650] w-full">
      <div className="flex justify-between px-[32.96px] md:px-32 pt-[56px] pb-[352px] md:py-40 flex-col md:flex-row bg-[url('../public/art.svg')] bg-origin-border bg-no-repeat bg-right-bottom md:bg-right-top">
        <div className="w-full md:w-2/3">
          <span className="text-sm md:text-base text-center font-Inter text-white font-medium uppercase h-[2.25rem] bg-white/10 px-2.5 rounded-[.375rem] py-2 truncate">
            {tag}
          </span>
          <h3 className="capitalise leading-[62.4px] mt-[19.04px] font-black font-Satoshi text-[51.2px] md:text-[56px] text-white">
            {title}
          </h3>
          <p className="font-Inter text-white leading-[25.6px] md:text-lg font-normal">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

type BuildingProps = {
  title: string;
  content: { image: string; text: string }[];
};

const Building: React.FC<BuildingProps> = ({ title, content }) => {
  return (
    <section className="bg-[#100650] w-full overflow-hidden">
      <div className="flex px-[32.96px] lg:px-32 pt-[56px] pb-[352px] md:py-40 flex-col lg:flex-row bg-[url(./assets/vector-mobile.svg)] lg:bg-[url('./assets/vector-ppc.svg')] bg-origin-border bg-no-repeat bg-right-top lg:bg-right-bottom relative">
        <div className="w-full md:w-2/3 ">
          <h3 className="capitalise leading-[62.4px] font-black font-Satoshi text-[51.2px] md:text-[56px] text-white">
            {title}
          </h3>
          <div className="flex flex-col gap-8 justify-center mt-5">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center font-Inter text-white leading-[25.6px] text-lg font-normal mt-14"
              >
                <img src={item.image} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type BookDemoProps = {
  content: {
    tag: string;
    title: string;
    paragraph: string;
    buttonLabel: string;
  };
  media: {
    isImage: boolean;
    url?: string;
  };
};

function BookDemo({ content, media }: BookDemoProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2">
        <div
          className={`w-full bg-white text-[#100650] flex justify-center items-center lg:text-lg text-[0.87rem] text-left rounded-[6px] px-2.5`}
        >
          {content.tag}
        </div>
        <h2 className="text-2xl font-bold my-4">{content.title}</h2>
        <p className="text-lg">{content.paragraph}</p>
        <div className="mt-4">
          <button
            className={`all-[unset] box-border flex  w-full lg:w-[183.58px] h-[52px]"  bg-[#8959ff] rounded-[8px] overflow-hidden`}
          >
            <div className="relative w-fit font-semibold text-white text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
              {content.buttonLabel}
            </div>
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-4">
        {media.isImage ? (
          <img src={media.url} alt="Image" className="w-full" />
        ) : (
          <video controls className="w-full">
            <source src={media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

const NewComponent = () => {
  return (
    <>
      <Satifactory
        tag={"satisfactory services"}
        title={"Why is Emerge Digital the Leading App Development Company?"}
        paragraph={
          " Over the course of nearly a decade, we have assisted numerous startup clients in raising capital for their businesses. We provide various engagement models to meet the specific needs of our clients. We can meet all of your requirements, whether you require a fixed budget model, a time and material model, or a fully dedicated development team. As the best app development company in Dubai, we keep our communication channels open so that our clients can contact us whenever they need to. We make certain that they are connected with the appropriate team of experts and that they receive the appropriate solutions on time"
        }
      />

      <Building
        title="Even if you don't know how to code, you can build your app idea."
        content={[
          {
            image: Pc,
            text: "Flexible - we can build anything regardless of the complexity",
          },
          {
            image: Dollar,
            text: "Guaranteed pricing and set timelines upfront using AI",
          },
          {
            image: DonateImage,
            text: "Aftercare - keeps your software up to date with no fuss",
          },
        ]}
      />

      <section className="bg-[#100650] w-full overflow-hidden">
        <div className="flex px-[32.96px] lg:px-32 pt-[56px] pb-[352px] md:py-40 flex-col lg:flex-row bg-[url(./assets/vector-mobile.svg)] lg:bg-[url('./assets/vector-ppc.svg')] bg-origin-border bg-no-repeat bg-right-top lg:bg-right-bottom relative">
          <div className="w-full md:w-2/3 ">
            <h3 className="capitalise leading-[62.4px] font-black font-Satoshi text-[51.2px] md:text-[56px] text-white">
              Even if you don't know how to code, you can build your app idea.
            </h3>
            <div className="flex flex-col gap-8 justify-center mt-5">
              <div className="flex gap-4 items-center font-Inter text-white leading-[25.6px] text-lg font-normal mt-14">
                <img src={Pc} alt="" />
                <p>
                  Flexible - we can build anything regardless of the complexity
                </p>
              </div>
              <div className="flex gap-4 items-center font-Inter text-white leading-[25.6px] text-lg font-normal">
                <span className="w-[2.375rem] flex justify-center items-center">
                  <img src={Dollar} alt="Dollar sign" />
                </span>
                <p>Guaranteed pricing and set timelines upfront using AI</p>
              </div>
              <div className="flex gap-4 items-center font-Inter text-white leading-[25.6px] text-lg font-normal">
                <img src={DonateImage} alt="Donate Icon" />
                <p>Aftercare - keeps your software up to date with no fuss</p>
              </div>
            </div>
          </div>
          <img
            src={MockupHand}
            alt="Mockup"
            className="mx-auto hidden lg:block  scale-90 lg:absolute lg:right-36 lg:bottom-[-48px] lg:scale-150"
          />
        </div>
      </section>
      <section className="bg-[#100650] w-full flex bg-[url('../public/art.svg')]  py-[12.5rem] px-[32.96px] md:px-32 pt-[56px] pb-[352px] md:py-40 bg-origin-border bg-no-repeat bg-right-bottom md:bg-right-top h-screen">
        <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center md:gap-0 md:justify-between flex-1">
          <div className="flex flex-col items-start gap-4">
            <span className=" text-sm md:text-base text-center font-Inter  text-white font-medium uppercase h-[2.25rem] bg-white/10 px-2.5 rounded-[.375rem] py-2">
              BUILDING
            </span>
            <div className="flex flex-col items-start gap-9 text-white">
              <h3 className="capitalise leading-[62.4px] font-black font-Satoshi text-[51.2px] md:text-[56px]">
                Industries Transformed With The Best Mobile App Development
                Services
              </h3>
              <p className="font-Inter text-white leading-[25.6px] md:text-lg font-normal">
                We are a top-rated app development company in Dubai, UAE, with a
                reputation for developing highly engaging mobile apps for a
                variety of business needs.
              </p>

              <button className="bg-[#8959FF] px-[1.875rem] py-3 rounded-lg font-semibold text-lg">
                Book a Demo
              </button>
            </div>
          </div>
          <div className="w-full">
            <iframe
              width="545"
              height="365"
              src="https://www.youtube.com/embed/dSufVTSCeVw"
              title="Builder Studio"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="bg-[#D1D0D7] rounded-3xl shadow-md shadow-"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewComponent;
