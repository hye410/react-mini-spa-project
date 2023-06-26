import { Link } from "react-router-dom";
import './css/Nav.css';
import { BiChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";
function Nav(){

  const [toggle,setToggle] = useState(false);
  const [animation,setAnimation] = useState(false);

  useEffect(() => {
    if(toggle === true) {
      setAnimation(true);
    }else {
      setTimeout( () => {
        setAnimation(false);
      },300);
    }
  },[toggle]);

  return(
    <nav 
    onMouseEnter={() => setToggle(true)}
    onMouseLeave={() => setToggle(false)}
    >
      <p>
        <BiChevronDown />
      </p>
        {
          animation && 
          <div id="nav" className={toggle === true ? 'nav-slide-down' : 'nav-slide-up'}>
            <ul>
              <li onClick={() => setToggle(false)}>
                <Link to="/about">병원소개</Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link to="/reservation">진료예약</Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link to="/post">예약확인</Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link to="/map">오시는길</Link>
              </li>
            </ul>
          </div>
        }




    </nav>
  )
}

export default Nav;