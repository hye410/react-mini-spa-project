import { useState } from 'react';
import './css/Search.css';
import { FiSearch } from "react-icons/fi";

function Search({Data,data,setData}){
  const [myText,setMyText] = useState('');

  const mySearchList =
  data.filter(info => info.name.includes(myText) || info.phone.includes(myText));

  return(
    <div id="search">
      <p>
        <FiSearch />
        <input
         type="text"
         onChange={(event)=>setMyText(event.target.value)}
         />
        <button 
        type="button"
        // onClick={() => setData(mySearchList)}
        >
          검색
        </button>
      </p>
      <span></span>
    </div>
  )
}

export default Search;