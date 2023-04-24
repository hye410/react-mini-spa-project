import './css/Reservation.css';

function Reservation(){
  return(
    <article id="reservation">
      <h3>진료예약</h3>
      <div>
        <form>
          <label for="userName">이름</label>
          <input type="text" id="userName" name="userName"/>
          <label for="userBirth">생년월일</label>
          <input type="date" id="userBirth" name="userBirth"/>
          <label for="userKind">진료과</label>
          <input type="select" id="userKind" name="userKind"/>
          <label for="userDate">예약일</label>
          <input type="date" id="userDate" name="userDate"/>
          <label for="userPhone">연락처</label>
          <input type="phone" id="userPhone" name="userPhone"/>
          <label for="userPW">비밀번호</label>
          <input type="password" id="userPW" name="userPW"/>
          <button type="submit">예약완료</button>
        </form>
      </div>
    </article>
  )
}

export default Reservation;