import { LiaEditSolid } from 'react-icons/lia';
import Title from '../../utils/Title';
import { useUserDetailsQuery } from '../../redux/features/user/userApi';
import { useSelector } from 'react-redux';


const Setting = () => {
    const {userId} = useSelector(state=>state.user)
    const {data: userDetails }= useUserDetailsQuery(userId);
    console.log(userDetails)

    return (
        <div className="w-full font-Poppins pl-[33px] pr-[90px]">
      <Title>Setting</Title>

      <section className="mt-16 w-full h-[314px] rounded-[46px] bg-white flex  justify-between items-center px-[55px]">
        <div className="flex items-center gap-4">
            <div className="w-[238px] h-[238px] rounded-[15px]  bg-[#FF9C82]">
                <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" className='w-full h-full rounded-[15px]'/>
            </div>
            <div className="font-semibold text-[#273240]">
                <h3 className="text-[60px]  uppercase leading-[70px]">{userDetails?.user.username}</h3>
                <p className="text-[26px] uppercase">Digital Marketing</p>
                <p>Email: <span className="text-blue-600 font-normal">{userDetails?.user.email}</span></p>
                Password: <span className="text-blue-600 font-normal">*****</span>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <button className="w-[170px] h-[56px] rounded-[26px] border-2 border-[#FF8723] flex justify-center items-center uppercase text-[#FF8723] text-[19px] font-semibold ">{userDetails?.type}</button>

            <LiaEditSolid className='text-[61px] text-[#FF8723]'/>
        </div>

      </section>
            
        </div>
    );
};

export default Setting;