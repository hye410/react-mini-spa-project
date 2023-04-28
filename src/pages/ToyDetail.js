import { useParams } from "react-router-dom";
import { FromData } from '../api/api';

function ToyDetail(){
  const { id } = useParams();
  const info = FromData(id);
  function storage(id){
    const getId = JSON.parse(sessionStorage.getItem('key')) || [];
    getId.push(id);
    sessionStorage.setItem('key',JSON.stringify(getId));
    window.location = "/toy";
  }
  
  return(
    <div>
      <ul>
        <li>{info.name}</li>
        <li>{info.phone}</li>
      </ul>
      <button onClick={()=>storage(info.id)}>
        삭제하기
      </button>
    </div>
  )
}

export default ToyDetail;
