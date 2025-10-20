import john from "/image-john.jpg";
import tanya from "/image-tanya.jpg";
import patterBg from "/pattern-bg.svg";
import patternCurve from "/pattern-curve.svg";
import patterQ from "/pattern-quotes.svg";
import left from "/icon-prev.svg";
import right from "/icon-next.svg";
import { useEffect, useState } from "react";

type Person = {
  id: number;
  img: string;
  info: string;
  name: string;
  title: string;
};

export default function App() {
  const data: Person[] = [
    {
      id: 1,
      img: john,
      info: `If you want to lay the best fundation possible I'd recommed taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer`,
      name: "John Tarkpor",
      title: "Junior Front-end Developer",
    },
    {
      id: 2,
      img: tanya,
      info: `I've been interested in coding for a whilte but never taken the jump, untill now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.`,
      name: "Tanya Sinclair",
      title: "UX Enginner",
    },
  ];

  const [shownItem, setShownItem] = useState<number>(2);

  //DERAVIDED STATES
  const activePerson: Person | undefined = data.find(
    (item) => item.id === shownItem,
  );

  //functions
  function handleSlides(num: number) {
    setShownItem((pS) => {
      if (num < 0 && shownItem === 1) return data.length;
      if (num > 0 && shownItem === data.length) return 1;

      return pS + num;
    });
  }

  useEffect(() => {
    const id = setInterval(() => {
      handleSlides(1);
      console.log("changed");
    }, 5000);

    console.log(id);
    return () => clearInterval(id);
  }, [shownItem]);

  return (
    <div className="relative mx-auto grid max-w-[400px] gap-5 p-8">
      <div className="absolute -bottom-2 left-0 w-40">
        <img src={patternCurve} alt="" />
      </div>
      <div className="relative p-8">
        <div className="absolute right-0 bottom-0 -z-1 h-full w-[104%]">
          <img src={patterBg} alt="" />
        </div>
        <div className="relative rounded-xl">
          <div className="absolute -bottom-5 left-1/2 z-5 w-[35%] -translate-x-1/2 overflow-hidden rounded-3xl bg-white">
            <div className="flex flex-row rounded-xl bg-white">
              <button
                className="flex basis-1/2 cursor-pointer items-center justify-center p-3 hover:bg-gray-100"
                onClick={() => {
                  handleSlides(-1);
                }}
              >
                <img src={left} alt="" className="w-3" />
              </button>
              <button
                className="flex basis-1/2 cursor-pointer items-center justify-center p-3 hover:bg-gray-100"
                onClick={() => {
                  handleSlides(1);
                }}
              >
                <img src={right} alt="" className="w-3" />
              </button>
            </div>
          </div>
          <div className="relative rounded-xl">
            <div className="absolute -z-4 h-full w-1/2 rounded-2xl opacity-30 shadow-[20px_10px_40px_0px_purple]"></div>
            <img src={activePerson?.img} alt="" className="z-2 rounded-xl" />
          </div>
        </div>
      </div>
      <div className="relative grid gap-5 text-center">
        <div className="absolute top-0 left-1/2 w-18 -translate-x-1/2">
          <img src={patterQ} alt="" />
        </div>
        <p className="text-my-blue-950 mt-7">"{activePerson?.info}"</p>
        <div className="">
          <h1 className="font-my-bold text-my-blue-950 text-xl">
            {activePerson?.name}
          </h1>
          <h2 className="font-my-normal text-my-gray-400">
            {activePerson?.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
