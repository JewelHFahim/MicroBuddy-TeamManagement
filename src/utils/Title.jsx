/* eslint-disable react/prop-types */

const Title = ({children}) => {
    return (
        <div className="mt-[60px] mb-[46px]">
            <h1 className="text-[50px] font-semibold uppercase font-Poppins leading-[32px] text-secondary pb-2 border-b-[2px] border-[#216FED]">{children}</h1>
        </div>
    );
};
    
export default Title;