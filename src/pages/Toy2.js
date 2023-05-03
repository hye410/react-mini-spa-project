import ReservationInfo from '../components/ReservationInfo';
import Search from '../components/Search';
import './css/Post.css';
import { FilterData } from '../api/api';
import { useState } from 'react';

function Toy2(){
  const Data = JSON.parse(sessionStorage.getItem('Data')) || FilterData();
  // const Data = FilterData();
  // const[data,setData] = useState(Data);
  const deletedId = JSON.parse(sessionStorage.getItem('id')) || 'false';

  const newData = Data.filter(info => {
    for(let i of deletedId) {
      if(info.id === i) return false;
    }
    return true;
  });
  const[data,setData] = useState(newData);

  return(
    <article id="toy2">
      <h3>예약확인</h3>
      <div>
        <Search newData={newData} data={data} setData={setData}/>
        <table>
          <thead>
            <tr>              
              <th>번호</th>
              <th>이름</th>
              <th>연락처</th>
            </tr>
          </thead>
          <tbody>
            {data.map(info => <ReservationInfo key={info.id} info={info}/>)}          
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Toy2;