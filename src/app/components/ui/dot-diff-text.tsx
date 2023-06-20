import { ReactNode } from "react";

type DotDiffTextProps = {
  children: ReactNode;
  className?: string;
};

export default function DotDiffText({ children, className }: DotDiffTextProps) {
  return (
    <div className={`${className} flex gap-x-1`}>
      <span className="text-[#0043A7] text-[64px] font-bold leading-[78px]">
        {children}
        <span className="text-[64px] font-bold text-[#F99617]">.</span>
      </span>
    </div>
  );
}
