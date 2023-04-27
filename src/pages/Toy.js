import { Link } from "react-router-dom";
import { FilterData } from "../api/api";
import { useEffect, useState } from "react";

function Toy(){
  const Data = FilterData();
  const[data,setData] = useState(Data);

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