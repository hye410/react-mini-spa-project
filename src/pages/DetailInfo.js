import { Link, useParams } from "react-router-dom";
import './css/DetailInfo.css';
import { FromData } from "../api/api";

function DetailInfo(){
  const { id } = useParams();
  const information = FromData(id);

  function cancel(id){
    const getId = JSON.parse(sessionStorage.getItem('id')) || [];
    getId.push(id);
    sessionStorage.setItem('id',JSON.stringify(getId));
    window.location="/post"
  }

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
          <button 
          type="button"
          onClick={()=>cancel(information.id)}>
            예약취소
          </button>
        </p>
      </div>
    </article>
  )
}

export default DetailInfo;