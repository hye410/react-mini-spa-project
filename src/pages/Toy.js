import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Data from '../api/reservationInfo2.json';

function Toy(){
  const Today = new Date(new Date().setHours(new Date().getHours() + 1,0))
  const [startDate, setStartDate] = useState(Today);
  const max = new Date(new Date().setMonth(new Date().getMonth() + 2));
  const offset = new Date().getTimezoneOffset() * 1000* 60;
  const today = new Date(Date.now() - offset);
  const birthMax = today.toISOString().slice(0,10);
  // const minDate = new Date(today.setHours(today.getHours() + 1)).toISOString().slice(0,16);
  // const maxDate = new Date(today.setMonth(today.getMonth() + 3)).toISOString().slice(0,10);
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  // console.log(
  //   startDate.toISOString().slice(0,10) +
    
  //   startDate.toISOString().slice(11,16)
  // )

  const list = JSON.parse(sessionStorage.getItem('Data')) || Data;

  console.log(list)

  let newInfo = {
    id : list.length + 1 ,
    name : '',
    birth : '',
    kind : '',
    date : '',
    phone : '',
    password : ''
  }

  

  const [addInfo, setAddInfo] = useState(newInfo);
  console.log(addInfo)

  function change(info){
    list.push(info);
    return sessionStorage.setItem('Data',JSON.stringify(list));
  }

 


  return(
    <article id="reservation">
      <h3>진료예약</h3>
      <div>
        <section>
          <h4>주의사항</h4>
          <ol>
            <li>1.아래의 내용을 모두 입력하여 주십시오.</li>
            <li>2.병원 진료 시간은 오전 9시 ~ 오후 6시 30분까지이며 공휴일, 주말은 휴진합니다.</li>
            <li>3.예약은 지금으로부터 최소 한시간 후부터 가능합니다.</li>
            <li>4.예약은 최대 2달 후까지만 가능합니다.</li>
            <li>5.비밀번호를 잊었을 시 병원으로 연락 부탁드립니다.</li>
          </ol>
        </section>
        <form>
          <label htmlFor="userName">이름</label>
          <input 
          type="text" 
          id="userName" 
          name="userName" 
          required 
          autoFocus
          onChange={(e)=>setAddInfo({...newInfo,name:e.target.value})}
          />
          <label htmlFor="userBirth">생년월일</label>
          <input 
          type="date" 
          id="userBirth" 
          name="userBirth"
          required
          max={birthMax}
          onChange={(e)=>setAddInfo({...addInfo,birth:e.target.value})}
           />
          <label htmlFor="userKind">진료과</label>
          <select name="userKind"
          onChange={(e)=>setAddInfo({...addInfo,kind:e.target.value})}
          >
            <option>신경외과</option>
            <option>이비인후과</option>
            <option>류마티스과</option>
            <option>피부과</option>
          </select>
          <label htmlFor="userDate">예약일</label>
          {/* <input 
          type="datetime-local"
          id="userDate" 
          name="userDate"
          required
          defaultValue={Today}
          min={minDate}
          max={maxDate}
          />           */}
          <DatePicker
            selected={startDate}
            onChange={(e) => {
                              setStartDate(e); 
                              setAddInfo({...addInfo,date:startDate.toISOString().slice(0,10) + startDate.toISOString().slice(11,16)})
                              // console.log(startDate)
                            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="yyyy-MM-dd h:mm aa"
            minDate={new Date()}
            maxDate={max}
            minTime={new Date().setHours(9,0)}
            maxTime={new Date().setHours(18,30)}
            filterDate={isWeekday}
            // onChange={(e)=>setAddInfo({...newInfo,date:e.target.value})}
          />
          <label htmlFor="userPhone">연락처</label>
          <input 
          type="tel"
          id="userPhone" 
          name="userPhone" 
          required
          placeholder="하이픈('-')없이 입력해주세요."
          onChange={(e)=>setAddInfo({...addInfo,phone:e.target.value})}
          />
          <label htmlFor="userPW">비밀번호</label>
          <input 
          type="password" 
          id="userPW" 
          name="userPW"
          minLength="4"
          maxLength="4"
          pattern="[0-9]*"
          onChange={(e)=>setAddInfo({...addInfo,password:e.target.value})}
          />
          <button 
          type="submit"
          onClick={()=>{change(addInfo)}}
          >
            예약완료
          </button>
        </form>
      </div>
    </article>
  )
}



export default Toy;