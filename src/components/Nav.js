import { Link } from "react-router-dom";
import './css/Nav.css';
import { BiChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";
function Nav({toggle,setToggle,reset}){

  const [animation,setAnimation] = useState(false);

  useEffect(()=>{
    if(toggle){
      setAnimation(true);
    }else{
      setTimeout(() => {
        setAnimation(false);
      },300);
    }
  },[toggle]);


  return(
    <nav>
      <p onClick={() => setToggle(!toggle)}>
        <BiChevronDown />
      </p>
      {animation && 
          <div id="nav"  className={toggle ? `nav-slide-down` : `nav-slide-up`}>
            
              <ul>
              <li><Link to="/about" onClick={reset}>병원소개</Link></li>
              <li><Link to="/reservation" onClick={reset}>진료예약</Link></li>
              <li><Link to="/post" onClick={reset}>예약확인</Link></li>
              <li><Link to="/map" onClick={reset}>오시는길</Link></li>
            </ul>
          </div>
}
    </nav>
  )
}

export default Nav;