import  { useState } from "react";
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";

const DashboardCalendar = () => {
  const [date, setDate] = useState({
    endValue: null,
    startValue: null,
    rangeDates: [],
  });

  const handleChange = (d) => {
    const [startValue, endValue, rangeDates] = d.range;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  return (
    <div className="border border-red-600 w-[800px]">
      <Datepicker
      onChange={handleChange}
      locale={enUS}
      startValue={date.startValue}
      endValue={date.endValue}
    />
    </div>
  );
};

export default DashboardCalendar;
