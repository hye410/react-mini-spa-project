import { useState } from 'react';
import './css/Search.css';
import { FiSearch } from "react-icons/fi";

function Search({newData,data,setData}){
  const [myText,setMyText] = useState('');

  const mySearchList =
  data.filter(info => info.name.includes(myText) || info.phone.includes(myText));

  function change(){
    if(myText === ''){
      return setData(newData);
    }
    return setData(mySearchList)
  }

  return(
    <div id="search">
      <p>
        <FiSearch />
        <input
         type="text"
         onChange={(event)=> setMyText(event.target.value)}
         />
        <button 
        type="button"
        onClick={()=>change()}
        >
          검색
        </button>
      </p>
      <span></span>
    </div>
  )
}

export default Search;