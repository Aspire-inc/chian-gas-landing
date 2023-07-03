import Image from 'next/image'

import LogoIcon from '@/assets/icons/logo-icon.svg'
import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import TwitterIcon from '@/assets/icons/twitter-icon.svg'
import LinkedInIcon from '@/assets/icons/linkedin-icon.svg'
import InstagramIcon from '@/assets/icons/instagram-icon.svg'
import Truck from '@/assets/truck.png'
import Girl from '@/assets/girl.png'

export default function Home() {
  return (
    <section className="h-[100vh]  container px-5 py-8 mx-auto gap-5  lg:grid grid-cols-[0.5fr,1fr,0.5fr]">
      {/* <Image src={Truck} alt="truck" /> */}
      <div className="bg-blue-100" />
      <div className="  flex flex-col justify-between lg:justify-around gap-1 items-center">
        <div className="flex justify-center">
          <Image src={LogoIcon} alt="" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-2">
            <div className="text-center text-blue-800 text-3xl font-bold">Coming Soon</div>
            <div className="text-center">
              <div className="text-center text-neutral-700 text-7xl font-bold">Get Notified</div>
              <span className="text-neutral-700 text-7xl font-bold">When We Launch</span>
              <span className="text-amber-500 text-7xl font-bold">.</span>
            </div>
          </div>
          <div className="w-full max-w-xl py-2 flex gap-2 items-center border border-gray-200 bg-white rounded-3xl overflow-hidden pr-2 pl-4 hidden">
            <input type="text" className="grow h-full outline-none focus:n" />
            <button className=" inline-block w-[142px] h-[60px] bg-amber-500 rounded-2xl text-center text-white font-bold">
              Submit
            </button>
          </div>
          <div className=" justify-center items-center gap-[47px] flex">
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((src, idx) => (
              <div
                className="w-10 h-10 grid place-content-center  bg-neutral-50 rounded-2xl border border-zinc-600"
                key={idx}
              >
                <Image className="w-5" src={src} alt="kk" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-center text-zinc-600 text-lg font-normal tracking-wider">
            © 2023 All rights reserved.
          </p>
        </div>
      </div>
      {/* <Image src={Girl} alt="girl" /> */}
      <div className="bg-blue-100" />
    </section>
  )
}
