import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Toy(){
  // const [startDate, setStartDate] = useState(new Date());
  
  // const isWeekday = (date) => {
  //   const day = date.getDay();
  //   return day !== 0 && day !== 6;
  // };
  
  // const MaxDate = new Date(new Date().setMonth(new Date().getMonth() + 2));

  // return (
  //   <DatePicker
  //     dateFormat="yyyy-MM-dd hh:mm aa"
  //     selected={new Date()}
  //     onChange={(date) => setStartDate(date)}
  //     filterDate={isWeekday}
  //     placeholderText="예약일을 선택하십시오."
  //     showTimeSelect
  //     minDate={new Date()}
  //     maxDate={MaxDate}
      
  //   />
  // );
    const [startDate, setStartDate] = useState(new Date());
    const max = new Date(new Date().setMonth(new Date().getMonth() + 2));
    
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="yyyy-MM-d h:mm aa"
        minDate={startDate}
        maxDate={max}
        minTime={new Date().setHours(8)}
        maxTime={new Date().setHours(18) && new Date().setMinutes(0)}
      />
    );
  };


export default Toy;