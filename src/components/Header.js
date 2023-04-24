import { Link } from 'react-router-dom';
import './css/Header.css';

function Header({reset}){
  return(
    <header>
      <div id="header">
        <h1><Link to="/" onClick={reset}>무궁화종합병원</Link></h1>
      </div>
    </header>
  )
}

export default Header;