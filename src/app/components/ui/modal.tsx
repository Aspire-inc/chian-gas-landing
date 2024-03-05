import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { QRCode } from "react-qrcode-logo";
import LogoIcon from "@/assets/icons/Cancel.svg";
import Logo from "@/assets/icons/logo-icon.svg";
import { getOS } from "@/app/utils/userAgent";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState("Gas User");
  const os = getOS();
// console.log(os,"This is OS");

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
              className="w-[400px] h-[671px] absolute top-12 rounded-[12px] shadow-xl lg:w-[722px] lg:h-[671px] bg-[#0043A7] px-4 py-4"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="flex items-end justify-end cursor-pointer"
                onClick={onClose}
              >
                {/* <div className="w-[52px] h-[52px] opacity-10 bg-white rounded-full">
                </div> */}
                <Image src={LogoIcon} width={50} height={50} alt="cancel" />
              </div>
              <div className="flex flex-col items-center justify-center h-full space-y-5 ">
                <h2 className="text-5xl font-bold text-center text-white ">
                  Scan QR Code
                </h2>
                <p className="text-xl font-normal text-center text-white ">
                  Scan the QR code using your smartphone's camera to access the
                  <br />
                  Chian Gas app. Compatible with both iOS and Android devices.
                </p>
                {/* <div className="flex items-center justify-center h-[180px] w-[180px] rounded-tl-lg  border-tr"></div> */}
                <div className="bg-white h-[270px] w-[270px] flex items-center justify-center rounded-xl">
                  <QRCode
                    value={os ==='ios' ? 'https://apps.apple.com/ng/app/chian/id6464393536':'https://play.google.com/store/apps/details?id=com.chiangas.com'}
                    logoPaddingStyle="square"
                    // logoPadding={30}
                    logoImage=""
                    // qrStyle="dots"
                    size={250}
                    // eyeRadius={50}
                    logoHeight={50}
                    quietZone={0}
                    logoWidth={50}
                    logoOpacity={5}
                  />
                </div>
                <div className="text-center">
                  <span className="text-xl font-normal text-white ">
                    Download as a{" "}
                  </span>
                  <span
                    className="text-xl font-semibold text-white underline cursor-pointer"
                    onClick={changeUser}
                  >
                    {users}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
