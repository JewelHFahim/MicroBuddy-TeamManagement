import { Link } from "react-router-dom";

const AddNewTaskBtn = () => {
  return (
    <div>
      <Link to="/create-task">
        <button className="w-[184px] h-[60px] rounded-[20px] bg-[#216FED] flex justify-center items-center gap-[20px] shadow-lg text-white">
          <p className="text-[18px] font-semibold"> + New Task </p>
        </button>
      </Link>
    </div>
  );
};

export default AddNewTaskBtn;
