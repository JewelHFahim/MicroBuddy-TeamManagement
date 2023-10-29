const Chatting = () => {
  return (
    <section className=" w-full">
      <div className="mt-[100px] w-fll rounded-[15px] shadow-lg bg-[#F2F6FC] p-[30px]">
        <h1 className="text-[30px] font-semibold text-[#273240] uppercase">
          Chat.
        </h1>

        <div className="mt-[43px] flex flex-col gap-10">
          <div className="flex items-start gap-[31px]">
            <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FBEE9F]"></div>
            <p className="font-[300px] w-[60%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium
            </p>
          </div>

          <div className="flex justify-end items-start gap-[31px]">
            <p className="font-[300px] w-[60%] text-right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium
            </p>
            <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FF9C82]"></div>
          </div>

          <div className="flex items-start gap-[31px]">
            <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FBEE9F]"></div>
            <p className="font-[300px] w-[60%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium
            </p>
          </div>

          <div className="flex justify-end items-start gap-[31px]">
            <p className="font-[300px] w-[60%] text-right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium
            </p>
            <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FF9C82]"></div>
          </div>

          <div className="flex items-start gap-[31px]">
            <div className="w-[65px] h-[65px] rounded-full border-2 border-white bg-[#FBEE9F]"></div>
            <p className="font-[300px] w-[60%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium
            </p>
          </div>
        </div>

        <div className="mt-10 w-full h-[162px] rounded-[15px] border border-[#216FED] shadow-md flex flex-col items-end">
          <input
            type="text"
            placeholder="write....."
            className="w-full h-[70%] rounded-[15px] focus:outline-none bg-transparent px-4"
          />

          <button className="w-[143px] h-[38px] border border-[#216FED] rounded-[12px] text-[20px] font-medium uppercase text-[#216FED] mx-[10px]">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chatting;
