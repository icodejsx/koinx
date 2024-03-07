import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TdType = {
  prop?: string;
  prop1?: string;
  nov102021About1Year?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
};

const Td: NextPage<TdType> = ({
  prop,
  prop1,
  nov102021About1Year,
  propWidth,
  propHeight,
  propColor,
}) => {
  const edasvgStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const spanStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="h-[61px] flex flex-row items-center justify-end py-[14.5px] pr-3 pl-[52px] box-border z-[1] text-right text-sm text-gray-100 font-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12">
      <div className="flex flex-col items-end justify-start gap-[4px_0px]">
        <div
          className="w-[141px] h-[11px] relative leading-[20px] font-medium flex items-center shrink-0"
          style={edasvgStyle}
        >
          <span className="w-full">
            <span>{prop}</span>
            <span className="text-absolute-red" style={spanStyle}>
              {prop1}
            </span>
          </span>
        </div>
        <div className="relative text-xs-2 leading-[20px]">
          {nov102021About1Year}
        </div>
      </div>
    </div>
  );
};

export default Td;
