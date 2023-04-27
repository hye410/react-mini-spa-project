import { Link, useParams } from "react-router-dom";
import Data from '../reservationInfo.json';
import './css/DetailInfo.css';

function DetailInfo(){
  const { id } = useParams();
//배열 안에서 객체를 찾을 것이기 때문에 find,,
  const information = Data.find( data => data.id === Number(id));

  return(
    <article>
      <h3>예약 내용</h3>
      <div id="DetailInfo">
        <dl>
          <dt>이름</dt>
          <dd>{information.name}</dd>
          <dt>생년월일</dt>
          <dd>{information.birth}</dd>
          <dt>진료과</dt>
          <dd>{information.kind}</dd>
          <dt>예약일</dt>
          <dd>{information.date}</dd>
          <dt>연락처</dt>
          <dd>{information.phone}</dd>
        </dl>
        <p>
        <Link to="/post">
          <button type="button">
          돌아가기
          </button>
        </Link>
          <button type="button">예약취소</button>
        </p>
      </div>
    </article>
  )
}

export default DetailInfo;