import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/features/user/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/mb logo.png";
import { BiUser, BiLock } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserGear } from 'react-icons/fa6';
import { ImLink } from 'react-icons/im';


const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispathc = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const res = dispathc(registerUser(data));
    console.log(res);
    toast.success("Register Success");
    console.log(data);
    navigate("/employee");
  };

  const inputStyle =
    "block w-full px-10 py-3 mt-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40";

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img className="w-[250px] h-full" src={logo} alt="" />
          </div>

          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
            >
              sign up
            </a>
          </div>

          {/* username */}
          <div className="relative flex items-center mt-8">

            <span className="absolute text-[22px] bottom-3 left-2 text-white">
              <BiUser/>
            </span>

            <input
              type="text"
              {...register("username")}
              className={inputStyle}
              placeholder="Username"
            />
          </div>

          {/* email */}
          <div className="relative flex items-center mt-6">

            <span className="absolute text-[22px] bottom-3 left-2 text-white">
              <AiOutlineMail/>
            </span>

            <input
              type="email"
              {...register("email")}
              className={inputStyle}
              placeholder="Email address"
            />
          </div>

          {/* Password  */}
          <div className="relative flex items-center mt-4 mb-8">
          <span className="absolute text-[22px] bottom-3 left-2 text-white">
              <BiLock/>
            </span>

            <input
              type="password"
              {...register("password")}
              className={inputStyle}
              placeholder="Password"
            />
          </div>

          {/* Type/Role */}
          <select
            data-te-select-init
            {...register("type")}
            className={inputStyle}
          >
            <option value="superadmin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>

          {/* Designation */}
          <div className="relative flex items-center mt-4">
          <span className="absolute text-[22px] bottom-3 left-2 text-white">
              <FaUserGear/>
            </span>

            <input
              type="text"
              {...register("category")}
              className={inputStyle}
              placeholder="Designation"
            />
          </div>

          {/* Image Link */}
          <div className="relative flex items-center mt-4">
          <span className="absolute text-[22px] bottom-3 left-2 text-white">
              <ImLink/>
            </span>

            <input
              type="text"
              {...register("image")}
              className={inputStyle}
              placeholder="Image Link"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
