/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateDate = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
      className=" w-[330px] px-1"
    />
  );
};

export default CreateDate;
