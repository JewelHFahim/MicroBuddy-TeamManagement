import { LiaEditSolid } from 'react-icons/lia';
import Title from '../../utils/Title';


const Setting = () => {


    return (
        <div className="w-full font-Poppins pl-[33px] pr-[90px]">
      <Title>Setting</Title>

      <section className="mt-16 w-full h-[314px] rounded-[46px] bg-white flex  justify-between items-center px-[55px]">
        <div className="flex items-center gap-4">
            <div className="w-[238px] h-[238px] rounded-[15px]  bg-[#FF9C82]"></div>
            <div className="font-semibold text-[#273240]">
                <h3 className="text-[60px]  uppercase leading-[70px]">Admin Name</h3>
                <p className="text-[26px] uppercase">Digital Marketing</p>
                <p>Email: <span className="text-blue-600 font-normal">admin@gmail.com</span></p>
                Password: <span className="text-blue-600 font-normal">*****</span>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <button className="w-[170px] h-[56px] rounded-[26px] border-2 border-[#FF8723] flex justify-center items-center uppercase text-[#FF8723] text-[19px] font-semibold ">Member</button>

            <LiaEditSolid className='text-[61px] text-[#FF8723]'/>
        </div>

      </section>
            
        </div>
    );
};

export default Setting;