import { ButtonHTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import BarsLoadingIcon from "@/assets/icons/bars-loading-icon.svg";

type ButtonProps = {
  bgColor?: string;
  textColor: string;
  loading?: boolean;
  trailingIcon?: ReactNode;
  leadingIcon?: ReactNode;
  children: string | ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const {
    textColor,
    bgColor,
    className,
    disabled,
    children,
    loading,
    trailingIcon,
    leadingIcon,
    style,
    ...rest
  } = props;
  return (
    <div className={`relative ${className} inline-block overflow-hidden`}>
      {disabled || loading ? (
        <div className="h-full w-full absolute top-0 left-0 z-[10] bg-[rgba(255,255,255,0.4)]"></div>
      ) : (
        ""
      )}
      <button
        type="button"
        disabled={disabled}
        style={{
          background: bgColor
            ? bgColor
            : "linear-gradient(90deg, #1CBD67 0%, #26E880 100%)",
          color: textColor,
          ...style,
        }}
        className={`w-full h-full py-1 px-3 relative overflow-hidden text-[1em] z-[1] active:scale-95`}
        {...rest}
      >
        <div
          style={{
            font: "inherit",
            visibility: loading ? "hidden" : "visible",
          }}
          className="flex items-center justify-center gap-x-2 text-[1em] w-full h-full relative z-[10]"
        >
          {leadingIcon ? leadingIcon : ""}
          {children}
          {trailingIcon ? trailingIcon : ""}
        </div>
        {loading ? (
          <div
            style={{
              background: bgColor
                ? bgColor
                : "linear-gradient(90deg, #1CBD67 0%, #26E880 100%)",
            }}
            className="absolute top-0 left-0 h-full w-full flex items-center justify-center z-[20]"
          >
            <Image src={BarsLoadingIcon} alt="" width={35} height={35} />
          </div>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
