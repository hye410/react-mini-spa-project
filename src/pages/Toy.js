import { Link } from "react-router-dom";
import { FilterData } from "../api/api";
import { useEffect, useState } from "react";

function Toy(){
  let Data = FilterData();
  const[data,setData] = useState(Data);
  const deletedId = JSON.parse(sessionStorage.getItem('key')) || [];
  
  const newData = Data.filter(info => {
    for(let i of deletedId) {
      if(info.id === i) return false;
    }
    return true;
  });

  useEffect(()=>{
    setData(newData)
  },[])

  return(
    <ul>
      {data.map(item => 
      <li key={item.id}>
        <Link to={`/toy/${item.id}`}>
        {item.name}
        </Link>
      </li>
      )}
    </ul>
  )
}



export default Toy;