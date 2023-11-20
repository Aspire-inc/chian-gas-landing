import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { QRCode } from "react-qrcode-logo";
import LogoIcon from "@/assets/icons/whiteCancel.svg";
import UserIcon from "@/assets/icons/profile.svg";
import SmsIcon from "@/assets/icons/sms.svg";
import Button from "./button";
// import Logo from "@/assets/icons/logo-icon.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomPartnerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState("Gas User");
  const changeUser = () => {
    setUsers(users === "Gas User" ? "Vendor" : "Gas User");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 p-8 bg-black opacity-50 blur-sm" />
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-[400px]  absolute top-12 rounded-[12px] shadow-xl lg:w-[722px]  bg-white px-10 py-4"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="flex items-end justify-end cursor-pointer mb-8 "
                onClick={onClose}
              >
                {/* <div className="w-[52px] h-[52px] opacity-10 bg-white rounded-full">
                </div> */}
                <Image src={LogoIcon} width={50} height={50} alt="cancel" />
              </div>
              <div className="flex flex-col items-center justify-center h-full space-y-5">
                <div className="mb-10">
                  <h2 className="text-5xl font-bold text-center text-[#0C0E18] ">
                    Become a Sponsor
                  </h2>
                  <p className="text-xl font-normal text-center text-[#5B5B5B]  mt-5">
                    Support groundbreaking gas innovations. Partner with us
                    <br />
                    and make a difference in homes everywhere.
                  </p>
                </div>
                <div className="bg-white  flex items-center justify-center rounded-xl flex-col ">
                  <div className="">
                    <p className="text-slate-950 text-base font-semibold leading-tight">
                      Full Name
                    </p>
                    <div className=" relative mt-3">
                      <Image
                        src={UserIcon}
                        width={25}
                        height={25}
                        alt="cancel"
                        className="absolute top-3 left-2"
                      />

                      <input
                        className="w-[327px] h-[52px] bg-gray-50 rounded-[15px] border border-stone-50 focus:outline-none pl-[2.5rem] p-4"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-slate-950 text-base font-semibold leading-tight">
                      Email Address
                    </p>
                    <div className=" relative mt-3">
                      <Image
                        src={SmsIcon}
                        width={25}
                        height={25}
                        alt="cancel"
                        className="absolute top-3 left-2"
                      />

                      <input
                        className="w-[327px] h-[52px] bg-gray-50 rounded-[15px] border border-stone-50 focus:outline-none pl-[2.5rem] p-4"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="mt-10 mb-10">
                    <button className="w-[327px] h-14 px-[123px] py-[15px] bg-blue-400 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
                      <p className="text-center text-white text-base font-semibold  leading-tight bg-none">
                        Continue
                      </p>
                    </button>
                  </div>
                </div>
                <div className="text-center mt-8  pb-8">
                  <span className="text-xl font-normal text-[#5B5B5B] ">
                    Chain Gas will contact you via the email address you provide
                    here and we carry on from there.
                  </span>
                  {/* <span
                    className="text-xl font-semibold text-white underline cursor-pointer"
                    onClick={changeUser}
                  >
                    {users}
                  </span> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomPartnerModal;
