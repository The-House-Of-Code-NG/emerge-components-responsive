import Pc from "../assets/newComp/pc.svg";
import Dollar from "../assets/newComp/dollar.svg";
import DonateImage from "../assets/newComp/donate.svg";
import MockupHand from "../assets/newComp/logo mockup.png";

type SatisfactoryProps = {
  tag: string;
  title: string;
  paragraph: string;
};

const Satisfactory: React.FC<SatisfactoryProps> = ({
  tag,
  title,
  paragraph,
}) => {
  return (
    <section className="bg-[#100650] w-full overflow-hidden">
      <div className="flex justify-between max-w-[100rem] mx-auto flex-col md:flex-row px-8 py-[3.5rem] md:p-16 bg-[url('../public/art.svg')] bg-origin-border bg-no-repeat bg-right-bottom md:bg-right-top">
        <div className="w-full md:w-2/3">
          <span className="text-sm md:text-base text-center font-Inter text-white font-medium uppercase h-[2.25rem] bg-white/10 px-2.5 rounded-[0.375rem] py-2 truncate">
            {tag}
          </span>
          <h3 className="capitalise leading-[62.4px] mt-[19.04px] font-black font-Satoshi text-[51.2px] md:text-[3.5rem] text-white">
            {title}
          </h3>
          <p className="space-y-6 mt-7 mb-11 font-Inter text-white leading-[2rem] md:text-lg font-normal">
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
    <section className="mx-auto bg-[#100650] w-full overflow-hidden">
      <div className="flex flex-col max-w-[100rem] mx-auto lg:flex-row px-8 py-[3.5rem] md:p-16 bg-[url(./assets/vector-mobile.svg)] lg:bg-[url('./assets/vector-ppc.svg')] bg-origin-border bg-no-repeat bg-right-top lg:bg-right-bottom relative">
        <div className="w-full md:w-2/3 ">
          <h3 className="capitalise leading-[3.9rem] font-black font-Satoshi text-[3.2rem] md:text-[3.5rem] text-white">
            {title}
          </h3>
          <div className="flex flex-col gap-8 justify-center mt-14">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center font-Inter text-white leading-[1.6rem] text-lg font-normal "
              >
                <img src={item.image} alt="" className="size-[2.375rem]" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={MockupHand}
          alt="Emerge Mockup"
          className="mx-auto hidden lg:block scale-90 lg:absolute lg:right-36 lg:bottom-[-5.625rem] lg:scale-125"
        />
      </div>
    </section>
  );
};

type BookDemoProps = {
  content: {
    tag: string;
    title: string;
    paragraph: string;
  };
  media: {
    url: string;
    alt?: string;
  };
  isImage: boolean;
};

const BookDemo: React.FC<BookDemoProps> = ({ content, media, isImage }) => {
  return (
    <section className="bg-white max-w-[100rem] mx-auto text-[#100650] w-full overflow-hidden">
      <div className="flex px-8 py-[3.5rem] md:p-16 md:px-20 md:bg-[url(./assets/vector-mobile.svg)] lg:bg-[url('./assets/vector-ppc.svg')] bg-origin-border bg-no-repeat bg-right-top lg:bg-right-bottom overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row gap-10 items-center justify-center md:gap-8 md:justify-between">
          <div className="flex flex-col items-start gap-4 w-full">
            <span className="text-sm md:text-base text-center font-Inter font-medium uppercase h-[2.25rem] bg-[#c9c1f3] px-2.5 rounded-[.375rem] py-2">
              {content.tag}
            </span>
            <div className="flex flex-col items-start gap-9">
              <h3 className="capitalise leading-[3.9rem] font-black font-Satoshi text-[3.2rem] md:text-[3.5rem]">
                {content.title}
              </h3>
              <p className="font-Inter leading-[1.6rem] md:text-lg font-normal">
                {content.paragraph}
              </p>
              <button className="bg-[#8959ff] text-white px-[1.875rem] py-3 rounded-lg font-semibold text-lg">
                Book a Demo
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="mx-auto object-cover">
              {isImage ? (
                <img
                  src={media.url}
                  alt={media.alt}
                  className=" w-[34.0625rem] h-[22.8125rem] rounded-lg shadow-md "
                />
              ) : (
                <video controls width={545} height={365} className="rounded-lg">
                  <source src={media.url} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewComponent: React.FC = () => {
  return (
    <>
      <Satisfactory
        tag="Satisfactory Services"
        title="Why is Emerge Digital the Leading App Development Company?"
        paragraph="Over the course of nearly a decade, we have assisted numerous startup clients in raising capital for their businesses. We provide various engagement models to meet the specific needs of our clients. We can meet all of your requirements, whether you require a fixed budget model, a time and material model, or a fully dedicated development team. As the best app development company in Dubai, we keep our communication channels open so that our clients can contact us whenever they need to. We make certain that they are connected with the appropriate team of experts and that they receive the appropriate solutions on time."
      />

      <BookDemo
        content={{
          tag: "Building",
          title:
            "Industries transformed with the best mobile app development services",
          paragraph:
            "We are a top-rated app development company in Dubai, UAE, with a reputation for developing highly engaging mobile apps for a variety of business needs.",
        }}
        media={{
          url: "https://source.unsplash.com/random",
          alt: "Builder Studio",
        }}
        isImage={false}
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
    </>
  );
};

export default NewComponent;
