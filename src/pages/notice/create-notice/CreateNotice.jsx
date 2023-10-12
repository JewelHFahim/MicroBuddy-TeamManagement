import Title from "../../../utils/Title";

const CreateNotice = () => {
  return (
    <div className="">
      <Title>Create Notice</Title>

      <section className="">
        <form>
          <div>
            <label className="text-[34px] font-semibold ml-2">
              Notice Title:
            </label>
            <input
              type="text"
              placeholder="Title Here"
              className="w-full h-[66px] rounded-[46px] border border-blue-700 bg-white focus:outline-none px-5 text-[20px] font-medium"
            />
          </div>

          <div className="mt-5">
            <label className="text-[34px] font-semibold ml-2">
              Notice Details.
            </label>
            <input
              type="text"
              placeholder="Title Here"
              className="w-full h-[375px] rounded-[46px] border border-blue-700 bg-white focus:outline-none px-5 text-[20px] font-medium"
            />
          </div>

          <div className="flex justify-end mt-5">
            <button className=" bg-blue-700 text-white px-16 py-4 rounded-[40px] text-[20px] font-semibold uppercase">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateNotice;
