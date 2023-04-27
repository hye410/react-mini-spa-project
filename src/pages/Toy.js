import { Link } from 'react-router-dom';
import Data from '../reservationInfo2.json';

function Toy(){

  return(
    Data.map(item => <div key={item.id}><Link to={`/toy/${item.id}`}>{item.name}</Link></div>)
  )
}



export default Toy;