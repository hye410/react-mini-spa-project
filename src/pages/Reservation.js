import './css/Reservation.css';

function Reservation(){
  const offset = new Date().getTimezoneOffset() * 1000* 60;
  const today = new Date(Date.now() - offset);
  const Today = today.toISOString().slice(0,16);
  const minDate = new Date(today.setHours(today.getHours() + 1)).toISOString().slice(0,16);
  const maxDate = new Date(today.setMonth(today.getMonth() + 3)).toISOString().slice(0,16);

  return(
    <article id="reservation">
      <h3>진료예약</h3>
      <div>
        <section>
          <h4>주의사항</h4>
          <ol>
            <li>1.아래의 내용을 모두 입력하여 주십시오.</li>
            <li>2.병원 진료 시간은 오전 9시 ~ 오후 6시까지이며 공휴일, 주말은 휴진합니다.</li>
            <li>2.예약은 지금으로부터 최소 한시간 후부터 가능합니다.</li>
            <li>3.예약은 최대 2달 후까지만 가능합니다.</li>
            <li>4.비밀번호를 잊었을 시 병원으로 연락 부탁드립니다.</li>
          </ol>
        </section>
        <form>
          <label htmlFor="userName">이름</label>
          <input type="text" id="userName" name="userName" required autoFocus/>
          <label htmlFor="userBirth">생년월일</label>
          <input 
          type="date" 
          id="userBirth" 
          name="userBirth"
          required
          max={Today}
           />
          <label htmlFor="userKind">진료과</label>
          <select name="userKind">
            <option>신경외과</option>
            <option>이비인후과</option>
            <option>류마티스과</option>
            <option>피부과</option>
          </select>
          <label htmlFor="userDate">예약일</label>
          <input 
          type="datetime-local"
          id="userDate" 
          name="userDate"
          required
          defaultValue={Today}
          min={minDate}
          max={maxDate}
          />          
          <label htmlFor="userPhone">연락처</label>
          <input 
          type="tel"
          id="userPhone" 
          name="userPhone" 
          required
          placeholder="하이픈('-')없이 입력해주세요."
          />
          <label htmlFor="userPW">비밀번호</label>
          <input 
          type="password" 
          id="userPW" 
          name="userPW"
          minLength="4"
          maxLength="4"
          />
          <button type="submit">예약완료</button>
        </form>
      </div>
    </article>
  )
}

export default Reservation;