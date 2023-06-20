import Image from "next/image";

export default function HowItWorksCard({
  name,
  description,
  image,
  tagVariant,
}: {
  name: string;
  description: string;
  image: string;
  tagVariant: string;
}) {
  return (
    <div className="p-6 bg-[#F1EFED] rounded-[10px] relative w-[430px] h-[226px]">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-[#3F3F3F] text-[24px] font-bold">{name}</h3>
        <p className="text-[#5B5B5B] text-[14px] max-w-[calc(100%-70px)]">
          {description}
        </p>
      </div>

      <div className="absolute w-[111px] h-[112px] bottom-[13px] right-[20px] rotate-[15deg]">
        <Image src={image} alt="" fill className="rounded-[14px]" />
        <div className="w-[19px] h-[19px] bg-[#0066FF] opacity-[0.7]"></div>
      </div>
    </div>
  );
}
