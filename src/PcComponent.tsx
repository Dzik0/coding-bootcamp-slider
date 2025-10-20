import type { Person } from "./App";
import patterBg from "/pattern-bg.svg";
import patternCurve from "/pattern-curve.svg";
import patterQ from "/pattern-quotes.svg";
import left from "/icon-prev.svg";
import right from "/icon-next.svg";
import { motion } from "motion/react";

type PcComponentTypes = {
  activePerson: Person | undefined;
  handleSlides: (num: number) => void;
};

export default function PcComponent({
  activePerson,
  handleSlides,
}: PcComponentTypes) {
  return (
    <motion.div
      className="relative mx-auto flex w-[1000px] overflow-hidden rounded-xl"
      key={activePerson?.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute -bottom-15">
        <img src={patternCurve} alt="" />
      </div>
      <div className="relative basis-1/2">
        <div className="absolute top-1/2 z-2 w-[120%] -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-18 left-1/5">
              <img src={patterQ} alt="" />
            </div>
            <p className="text-my-blue-950 text-3xl font-extralight">
              "{activePerson?.info}"
            </p>
            <div className="mt-6 flex gap-4">
              <h1 className="text-my-blue-950 font-my-bold">
                {activePerson?.name}
              </h1>
              <h2 className="text-my-gray-400 font-my-normal">
                {activePerson?.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative basis-1/2 p-10">
        <div className="absolute top-0 left-0 -z-1 h-full w-full">
          <img src={patterBg} alt="" className="h-full w-full" />
        </div>
        <div className="relative">
          <div className="absolute h-full w-full rounded-2xl opacity-20 shadow-[-5px_20px_30px_0px_purple]"></div>
          <div className="absolute -bottom-5 left-1/6 flex w-[23%] overflow-hidden rounded-3xl bg-white">
            <button
              className="flex basis-1/2 cursor-pointer items-center justify-center p-3 hover:bg-gray-100"
              onClick={() => {
                handleSlides(-1);
              }}
            >
              <img src={left} alt="" />
            </button>
            <button
              className="flex basis-1/2 cursor-pointer items-center justify-center p-3 hover:bg-gray-100"
              onClick={() => {
                handleSlides(1);
              }}
            >
              <img src={right} alt="" />
            </button>
          </div>
          <img
            src={activePerson?.img}
            alt=""
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
