import Pc from "../assets/newComp/pc.svg";
import MockupHand from "../assets/newComp/logo mockup.png";
import Dollar from "../assets/newComp/dollar.svg";
import DonateImage from "../assets/newComp/donate.svg";

const NewComponent = () => {
    return (
        <>
            <section className="bg-[#100650] w-full ">
                <div className="flex justify-between px-[32.96px] md:px-32 pt-[56px] pb-[352px] md:py-40 flex-col md:flex-row bg-[url('../public/art.svg')] bg-origin-border bg-no-repeat bg-right-bottom md:bg-right-top">
                    <div className="w-full md:w-2/3">
            <span className=" text-sm md:text-base text-center font-Inter  text-white font-medium uppercase h-[2.25rem] bg-white/10 px-2.5 rounded-[.375rem] py-2 truncate">
              SATIFACTORY SERVICES
            </span>
                        <h3 className="capitalise leading-[62.4px] mt-[19.04px] font-black font-Satoshi text-[51.2px] md:text-[56px] text-white">
                            Why is Emerge Digital the Leading App Development Company?
                        </h3>
                        <div
                            className="space-y-6 mt-7 mb-11
            "
                        >
                            <p className="font-Inter text-white leading-[25.6px] md:text-lg font-normal">
                                Over the course of nearly a decade, we have assisted numerous
                                startup clients in raising capital for their businesses.
                            </p>
                            <p className="font-Inter text-white leading-[25.6px] text-lg font-normal">
                                We provide various engagement models to meet the specific needs
                                of our clients. We can meet all of your requirements, whether
                                you require a fixed budget model, a time and material model, or
                                a fully dedicated development team.
                            </p>
                            <p className="font-Inter text-white leading-[25.6px] text-lg font-normal">
                                As the best app development company in Dubai, we keep our
                                communication channels open so that our clients can contact us
                                whenever they need to. We make certain that they are connected
                                with the appropriate team of experts and that they receive the
                                appropriate solutions on time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#100650] w-full overflow-hidden">
                <div className="flex px-[32.96px] lg:px-32 pt-[56px] pb-[352px] md:py-40 flex-col lg:flex-row bg-[url(./assets/vector-mobile.svg)] lg:bg-[url('./assets/vector-ppc.svg')] bg-origin-border bg-no-repeat bg-right-top lg:bg-right-bottom relative">
                    <div className="w-full md:w-2/3 ">
                        <h3 className="capitalise leading-[62.4px] font-black font-Satoshi text-[51.2px] md:text-[56px] text-white">
                            Even if you don't know how to code, you can build your app idea.
                        </h3>
                        <div
                            className="flex flex-col gap-8 justify-center mt-5"
                        >
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
        </>
    );
};

export default NewComponent;
