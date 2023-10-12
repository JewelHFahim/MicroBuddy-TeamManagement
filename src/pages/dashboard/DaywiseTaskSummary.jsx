import { useState } from "react";

const DaywiseTaskSummary = () => {

    const [active, setActive] = useState(1);

    const handleActive = (index) => {
        setActive(index)
    }

  const calender = [
    {
      day: "sun",
      date: 1,
    },
    {
      day: "mon",
      date: 2,
    },
    {
      day: "tue",
      date: 3,
    },
    {
      day: "wed",
      date: 4,
    },
    {
      day: "thu",
      date: 5,
    },
    {
      day: "fri",
      date: 6,
    },
    {
      day: "sat",
      date: 7,
    },
  ];

  return (

      <section className="w-full h-[250px] rounded-[22px] bg-white p-[43px] flex justify-center gap-5 shadow-lg">

        {[1, 2, 3].map((item, i) => (
          <div key={i} className="flex gap-5">
            {calender.map((day, i) => (
              <div key={i} onClick={()=>handleActive(i)}  className={`text-center text-[#0E123E66] font-Manrope flex flex-col gap-y-4 ${ active === i+1 ? "text-black" : ""}`}>
                <p className="text-[21px] font-bold  uppercase">{day.day}</p>
                <p className="text-[28px]">{i+1}</p>
                <div className="flex flex-col gap-y-1">
                    <div className="w-[40px] h-[3px] bg-green-600 rounded-lg"></div>
                    <div className="w-[40px] h-[3px] bg-orange-600 rounded-lg"></div>
                    <div className="w-[40px] h-[3px] bg-cyan-600 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        ))}

      </section>
  
  );
};

export default DaywiseTaskSummary;
