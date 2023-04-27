import { useParams } from "react-router-dom";
import { FromData } from '../api/api';

function ToyDetail(){
  const { id } = useParams();
  const info = FromData(id); 

  return(
    <div>
      <ul>
        <li>{info.name}</li>
        <li>{info.phone}</li>
      </ul>
      <button onClick={()=>sessionStorage.setItem('key',JSON.stringify(info.id))}>
        삭제하기
      </button>
    </div>
  )
}

export default ToyDetail;
