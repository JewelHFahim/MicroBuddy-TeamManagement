const Activity = () => {
  return (
    <section>
      <div className="mt-[27px] bg-[#F2F6FC] rounded-[15px] w-[712px] h-[666px] p-[40px]">
        <h2 className="text-secondary text-[20px] font-semibold">Activity</h2>

        <div className="mt-[40px] flex items-start gap-4">
          <div className="w-[40px] h-[40px] rounded-full border-2 border-white bg-yellow-300"></div>

          <div className="flex flex-col">
            <p className="text-secondary text-[18px]">Lily Anderson</p>
            <p className="text-[10px] text-[#7C8DB5]">Today 10:15 AM</p>

            <div className="mt-5">
              <p className="font-semibold">Checked on Text</p>
              <p className="bg-[#F7F7F8] p-5 rounded-md w-[313px] h-[110px]">
                That’s pretty good. For the Hero section, maybe you can reduce
                some objects for white space.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[40px] flex items-start gap-4">
          <div className="w-[40px] h-[40px] rounded-full border-2 border-white bg-[#DDDEFD]"></div>

          <div className="flex flex-col">
            <p className="text-secondary text-[18px]">Luckman Brown</p>
            <p className="text-[10px] text-[#7C8DB5]">Yesterday, 05:25 PM</p>

            <div className="mt-5">
              <p className="font-semibold">Complete to Task</p>
              <p className="bg-[#F7F7F8] p-5 rounded-md w-[313px] h-[110px]">
                Complete to Task
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
