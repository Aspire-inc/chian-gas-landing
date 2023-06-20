import NextIcon from "@/assets/icons/next-icon.svg";
import PrevIcon from "@/assets/icons/prev-icon.svg";
import TransparentLogoIcon from "@/assets/icons/transparent-logo-icon.svg";
import TelevisionIcon from "@/assets/icons/television-icon.svg";
import HalfSmartPhoneIcon from "@/assets/icons/half-smartphone-icon.svg";
import QuestionGirlIcon from "@/assets/icons/question-girl-icon.svg";
import ThinkingBoyIcon from "@/assets/icons/thinking-boy-icon.svg";
import Head from "next/head";
import Image from "next/image";
import DotDiffText from "./components/ui/dot-diff-text";
import HowItWorksCard from "./components/ui/how-it-works-card";
import FaqCard from "./components/ui/faq-card";

const howItoWorks = [
  {
    name: "Sign Up/Sign In",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/sign-in.png",
  },
  {
    name: "Place Order",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/place-order.png",
  },
  {
    name: "Order Processing",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/order-processing.png",
  },
  {
    name: "Order Delivery",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/order-delivery.png",
  },
  {
    name: "Order fulfilled",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/order-fulfilled.png",
  },
];

const newsAndUpdates = [
  {
    name: "Our launch date is here",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/our-launch-date.png",
  },
  {
    name: "How to use accessories",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/how-to-use-accessories.png",
  },
  {
    name: "Tips on safety",
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris eget felis et felis
    ultrices tempus at sed eros.`,
    image: "/tips-on-safety.png",
  },
];

const faqs = [
  {
    name: "How do I create an account on Chian?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
  {
    name: `Can I track the gas level in my cylinder through
    the Chian app?`,
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
  {
    name: "How can I place an order for a gas refill?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
  {
    name: "What payment methods are accepted for gas refills?",
    description: `To create an account, simply download Chian App
    and sign up using your email address and set a password.`,
  },
];

export default function Home() {
  return (
    <main className="">
      <div
        style={{
          backgroundImage: "url(/woman-feeding-man.png)",
        }}
        className="h-[800px]"
      >
        <div
          style={{ background: "rgba(0,0,0,0.5)" }}
          className="w-full h-full flex items-center justify-between px-14 gap-x-16"
        >
          <Image src={PrevIcon} alt="" className="cursor-pointer" />
          <div className="h-full flex justify-center items-start flex-col flex-grow">
            <p className="font-bold text-white text-[80px] leading-[98px]">
              Connect. Refill
            </p>
            <p className="font-bold text-white text-[80px] leading-[98px]">
              Cook with ease
            </p>
            <p className="text-white text-[20px] mb-10 w-[900px] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget felis et felis ultrices tempus at sed eros. Vivamus fringilla
              ipsum metus, ac tincidunt sapien maximus eget. Quisque condimentum
              bibendum vestibulum.
            </p>

            <button className="text-white bg-[#F99617] w-[200px] h-[56px] rounded-[30px] flex items-center justify-center font-semibold">
              Download App
            </button>
          </div>
          <Image src={NextIcon} alt="" className="cursor-pointer" />
        </div>
      </div>

      <div className="bg-white p-7 flex items-center flex-col">
        <div className="flex gap-x-3">
          <div className="w-[40px] h-[5px] bg-[#F99617] rounded-[50px]"></div>
          <div className="w-[40px] h-[5px] bg-[#F99617] opacity-[0.2] rounded-[50px]"></div>
          <div className="w-[40px] h-[5px] bg-[#F99617] opacity-[0.2] rounded-[50px]"></div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <DotDiffText>How it works</DotDiffText>

          <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-7">
            {howItoWorks.map((data, i) => (
              <HowItWorksCard
                tagVariant=""
                key={i}
                description={data.description}
                image={data.image}
                name={data.name}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url(/as-a-vendor-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center cennter",
        }}
        className="w-[100%] h-[600px] mt-20 p-16 flex items-center"
      >
        <div className="w-[calc(100%-700px)]">
          <DotDiffText>As a vendor?</DotDiffText>
          <p className="text-[#5B5B5B] text-[18px] mt-1 tracking-wider w-[calc(100%-100px)]">
            Manage users, riders, and vendors via admin panel. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mauris eget felis et felis
            ultrices tempus at sed eros. Donec pulvinar lacus a augue ultricies
            lacinia. Phasellus cursus elementum commodo. Curabitur quam sapien,
            pretium sed tellus at, condimentum ultricies enim. In cursus
            scelerisque nisl vitae condimentum.
          </p>

          <p className="text-[#0066FF] font-semibold my-8">Learn more...</p>

          <button className="w-[200px] h-[50px] grid place-content-center rounded-[30px] border border-[#A7AEC1]">
            Enrol Now
          </button>
        </div>
        <div>
          <Image src={TelevisionIcon} alt="" />
        </div>
      </div>

      <div className="flex justify-center py-20 relative">
        <Image src={TransparentLogoIcon} alt="" />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-[48px]">
          <p className="text-center max-w-[80%]">
            <span className="font-bold text-inherit">Chian: </span> Your
            convenient connection to gas vendors for quick and hassle-free
            refills. Never run out of gas again with our easy-to-use app.
          </p>
        </div>
      </div>

      <div className="max-w-[80%] mx-auto mt-20 relative">
        <div className="flex gap-x-10">
          <div className="relative w-[500px] h-[610px] overflow-hidden rounded-[20px] z-[10]">
            <Image src={"/stay-informed.png"} alt="" fill />
          </div>
          <div className="w-[calc(100%-500px)]">
            <p className="text-[#CACACA] text-[36px]">
              GET ALERT. REFILL. KEEP COOKING
            </p>
            <DotDiffText>
              Stay informed of your gas levels in advance
            </DotDiffText>
            <span className="text-[#F9F9F9] font-bold text-[170px] leading-[170px] left-[-100px] relative">
              Chian
            </span>
            <p className="text-[#5B5B5B] text-[18px] tracking-wider">
              Chian enables customers to monitor their gas cylinder's level
              through seamless integration with a mounted gas level indicator
              device, ensuring you never run out of gas. Stay informed in
              advance to plan for refills conveniently. Track and monitor the
              gas level inside your cylinder. Effortlessly manage your gas
              supply with real-time updates. Stay prepared and avoid unexpected
              gas shortages. Simplify your gas refilling process with proactive
              notifications.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[80%] mx-auto mt-72 relative">
        <div className="flex gap-x-10">
          <div className="w-[calc(100%-500px)]">
            <p className="text-[#CACACA] text-[36px]">LEAKAGE ALERT SYSTEM</p>
            <DotDiffText>Get Instant gas leakage notifications</DotDiffText>
            <p className="text-[#F9F9F9] font-bold text-[170px] leading-[170px] text-right right-[-100px] relative">
              Chian
            </p>
            <p className="text-[#5B5B5B] text-[18px] tracking-wider">
              Chian prioritizes safety, and that's why the app seamlessly
              integrates with a gas leakage detector device affixed to the gas
              cylinder. This innovative solution actively monitors and swiftly
              alerts users the moment any gas leakage is detected. By keeping a
              vigilant eye on gas leakage right from the source, Chian ensures
              timely notifications when even the slightest leakage emerges from
              the cylinder. Your safety is our utmost concern, and we leave no
              room for compromise when it comes to protecting you from potential
              gas leaks.
            </p>
          </div>
          <div className="relative w-[500px] h-[610px] overflow-hidden rounded-[20px] z-[10]">
            <Image src={"/get-instant-gas.png"} alt="" fill />
          </div>
        </div>
      </div>

      <div className="mt-28 max-w-[80%] mx-auto">
        <DotDiffText className="justify-center">
          Frequently asked questions
        </DotDiffText>

        <div className="flex mt-10">
          <div className="w-[50%] h-[350px] flex items-center justify-center">
            <div className="flex gap-x-2">
              <Image src={QuestionGirlIcon} alt="" width={170} height={170} />
              <Image
                src={ThinkingBoyIcon}
                alt=""
                width={170}
                height={170}
                className="mt-20"
              />
            </div>
          </div>
          <div className="w-[50%]">
            {faqs.map((faq, i) => (
              <FaqCard description={faq.description} name={faq.name} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 max-w-[80%] mx-auto">
        <DotDiffText className="">News and updates</DotDiffText>
        <div className="mt-10 grid grid-cols-3 grid-rows-1 gap-7">
          {newsAndUpdates.map((data, i) => (
            <div key={i} className="">
              <div className="w-full h-[200px] relative overflow-hidden rounded-[12px]">
                <Image src={data.image} alt="" fill />
              </div>
              <p className="text-[#3F3F3F] text-[24px] font-bold my-5">
                {data.name}
              </p>
              <p className="text-[16px] text-[#5B5B5B]">{data.description}</p>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-[16px] text-[#DBDDE3]">July 5, 2023</span>
                <div>
                  <span className="text-[16px] font-semibold text-[#5B5B5B]">
                    Read More
                  </span>
                  <div className="w-full h-[3px] bg-[#FFDCAE]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 max-w-[80%] mx-auto">
        <DotDiffText className="justify-center">Get our apps now</DotDiffText>

        <div className="flex justify-center gap-5 my-7">
          <button className="transition-all duration-500 w-[125px] h-[50px] flex items-center justify-center rounded-[100px] border border-[#A7AEC1] hover:bg-[#3F3F3F] hover:text-white hover:border-none">
            User
          </button>
          <button className="transition-all duration-500 w-[125px] h-[50px] flex items-center justify-center rounded-[100px] border border-[#A7AEC1] hover:bg-[#3F3F3F] hover:text-white hover:border-none">
            Vendor
          </button>
          <button className="transition-all duration-500 w-[125px] h-[50px] flex items-center justify-center rounded-[100px] border border-[#A7AEC1] hover:bg-[#3F3F3F] hover:text-white hover:border-none">
            Delivery
          </button>
        </div>

        <div className="pt-20 px-14 bg-[#0043A7] rounded-[20px] mt-5 flex justify-between items-start">
          <div>
            <div className="text-white ">
              <p className="text-inherit text-[50px] font-bold leading-[61px]">
                Order in seconds,
              </p>
              <p className="text-inherit text-[50px] font-bold leading-[61px]">
                refill in minutes.
              </p>
            </div>
            <p className="max-w-[500px] mt-6 text-white text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget felis et felis ultrices tempus at sed eros.
            </p>
          </div>

          <div>
            <div className="w-[500px] h-[400px] relative">
              <Image src={HalfSmartPhoneIcon} alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
