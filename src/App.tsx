import john from "/image-john.jpg";
import tanya from "/image-tanya.jpg";

import { useEffect, useState } from "react";
import MobileComponent from "./MobileComponent.tsx";
import PcComponent from "./PcComponent.tsx";

export type Person = {
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
    }, 10000);

    return () => clearInterval(id);
  }, [shownItem]);

  return (
    <div className="flex h-dvh items-center">
      <div className="block w-full md:hidden">
        <MobileComponent
          activePerson={activePerson}
          handleSlides={handleSlides}
        />
      </div>
      <div className="hidden w-full md:block">
        <PcComponent activePerson={activePerson} handleSlides={handleSlides} />
      </div>
    </div>
  );
}
