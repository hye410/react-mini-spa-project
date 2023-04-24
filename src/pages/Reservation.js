import './css/Reservation.css';

function Reservation(){
  const today = new Date();
  const Today = today.toISOString().slice(0,10);
  const maxDate = new Date(today.setMonth(today.getMonth() + 3)).toISOString().slice(0,10);

  return(
    <article id="reservation">
      <h3>진료예약</h3>
      <div>
        <form>
          <label htmlFor="userName">이름</label>
          <input type="text" id="userName" name="userName"/>
          <label htmlFor="userBirth">생년월일</label>
          <input 
          type="date" 
          id="userBirth" 
          name="userBirth"
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
          type="date" 
          id="userDate" 
          name="userDate" 
          defaultValue={Today}
          min={Today}
          max={maxDate}
          />
          <label htmlFor="userPhone">연락처</label>
          <input type="tel" id="userPhone" name="userPhone"/>
          <label htmlFor="userPW">비밀번호</label>
          <input type="password" id="userPW" name="userPW"/>
          <button type="submit">예약완료</button>
        </form>
      </div>
    </article>
  )
}

export default Reservation;