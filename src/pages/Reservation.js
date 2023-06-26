import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './css/Reservation.css';
import Data from '../api/reservationInfo.json';

function Reservation(){
  const Today = new Date(new Date().setHours(new Date().getHours() + 1,0))
  const [startDate, setStartDate] = useState(Today);
  const max = new Date(new Date().setMonth(new Date().getMonth() + 2));
  const offset = new Date().getTimezoneOffset() * 1000* 60;
  const today = new Date(Date.now() - offset);
  const birthMax = today.toISOString().slice(0,10);
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const DATA = JSON.parse(sessionStorage.getItem('Data')) || Data;

  let newInfo = {
    id : DATA.length + 1,
    name : '',
    birth : '',
    kind : '신경외과',
    date : startDate.toISOString().slice(0,10) + ' ' + startDate.toISOString().slice(11,16),
    phone : '',
    password : ''    
  }

  const [addedInfo,setAddedInfo] = useState(newInfo);


 
  function changeData(info){
    if( addedInfo.name === '' 
      || addedInfo.birth === ''
      || addedInfo.phone === '' 
      || addedInfo.password === '' ) {
     return alert('내용을 모두 작성하여 주십시오.')
    }else{
      DATA.push(info);
      sessionStorage.setItem('Data',JSON.stringify(DATA));
      alert('예약이 완료되었습니다.');
    }
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
          onChange={(e) => setAddedInfo({...newInfo,name:e.target.value})}
          />
          <label htmlFor="userBirth">생년월일</label>
          <input 
          type="date" 
          id="userBirth" 
          name="userBirth"
          required
          max={birthMax}
          onChange={(e) => setAddedInfo({...addedInfo,birth:e.target.value})}
           />
          <label htmlFor="userKind">진료과</label>
          <select 
          name="userKind"
          onChange={(e) => setAddedInfo({...addedInfo,kind:e.target.value})}
          >
            <option>신경외과</option>
            <option>이비인후과</option>
            <option>류마티스과</option>
            <option>피부과</option>
          </select>
          <label htmlFor="userDate">예약일</label>
          <DatePicker
            selected={startDate}
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
            required
            onChange={(e) => {
                      setStartDate(e);
                      setAddedInfo({...addedInfo,date:startDate.toISOString().slice(0,10) + ' ' + startDate.toISOString().slice(11,16)})
                        }
                      }
          /> 
          <label htmlFor="userPhone">연락처</label>
          <input 
          type="tel"
          id="userPhone" 
          name="userPhone" 
          required
          placeholder="하이픈('-')없이 입력해주세요."
          onChange={(e) => setAddedInfo({...addedInfo,phone:e.target.value})}
          />
          <label htmlFor="userPW">비밀번호</label>
          <input 
          type="password" 
          id="userPW" 
          name="userPW"
          minLength="4"
          maxLength="4"
          pattern="[0-9]*"
          required
          onChange={(e) => setAddedInfo({...addedInfo,password:e.target.value})}
          />
          <button 
          type="submit"
          onClick={()=>{changeData(addedInfo)}}
          >
            예약완료
          </button>
        </form>
      </div>
    </article>
  )
}

export default Reservation;